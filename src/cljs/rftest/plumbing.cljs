(ns rftest.plumbing
  (:require
   [clojure.string  :as str]
   [cljs.core.async :as async  :refer (<! >! put! chan)]
   [taoensso.encore :as enc    :refer (tracef debugf infof warnf errorf)]
   [taoensso.sente  :as sente  :refer (cb-success?)]
   ;; Optional, for Transit encoding:
   [taoensso.sente.packers.transit :as sente-transit])
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)]))

(debugf "Initializing the sente plumbing...")

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk"
                                  {:type :auto})]
    (def chsk       chsk)
    (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
    (def chsk-send! send-fn) ; ChannelSocket's send API fn
    (def chsk-state state)   ; Watchable, read-only atom
    )

;;;; Routing handlers

(defmulti event-msg-handler :id) ; Dispatch on event-id
    ;; Wrap for logging, catching, etc.:
(defn     event-msg-handler* [{:as ev-msg :keys [id ?data event]}]
  ;;(debugf "Event: %s" event)
  (event-msg-handler ev-msg))

(defmethod event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (= ?data {:first-open? true})
    (debugf "Channel socket successfully established!")
    (debugf "Channel socket state change: %s" ?data)))

;; (defmethod event-msg-handler :chsk/recv
;;   [{:as ev-msg :keys [?data]}]
;;   (debugf "Push event from server: %s" ?data))

(defmethod event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (debugf "Handshake: %s" ?data)))

;; (defmethod event-msg-handler :chsk/recv
;;   [{:as ev-msg :keys [event]}]
;;   ;(debugf "EVENT: %s" (second event))
;;   (table/dispatch-message (second event)))

(defmethod event-msg-handler :default ; Fallback
  [{:as ev-msg :keys [event]}]
  (debugf "Unhandled event: %s" event))


(def router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_ (sente/start-chsk-router! ch-chsk event-msg-handler*)))

(defn start! []
  (start-router!))

(start!)
