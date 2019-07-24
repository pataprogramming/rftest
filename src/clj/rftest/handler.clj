(ns rftest.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [resources files] :as route]
            [ring.util.response :refer [resource-response]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.reload :refer [wrap-reload]]
            [rftest.html :as html]
            [taoensso.timbre :as timbre :refer [tracef debugf infof warnf errorf]]))

(defmulti event-msg-handler :id) ; Dispatch on event-id

;; Wrap for logging, catching, etc.:
(defn sente-handler [{:as ev-msg
                      :keys [id ?data event ring-req ?reply-fn send-fn]}]
  (event-msg-handler ev-msg))

(defmethod event-msg-handler :default ; Fallback
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    ;(debugf "Unhandled event: %s" event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-from-server event}))))

(defmethod event-msg-handler :chsk/ws-ping
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  nil) ; Swallow web-socket pings for now


(defmethod event-msg-handler :chsk/uidport-open
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  nil) ; No special action on client connect

(defmethod event-msg-handler :chsk/uidport-close
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  nil) ; No special action on client disconnect


(defroutes routes
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (files "/" {:root "public"})
  (resources "/")
  ;(GET "/" [] (html/index))
  ;(route/not-found (html/index))
  )

(defn find-user-id [ring-req]
  ;; For simplicity, we'll use the client-generated client-id as a transient
  ;; identity for each tab. Getting nils when trying to use the :ring-session.
  (:client-id ring-req))

;; (def app
;;   (-> routes
;;       (wrap-defaults site-defaults)))

(def dev-handler (-> #'app wrap-reload))

(defn ring-handler [_]
  routes)

(def site site-defaults)
