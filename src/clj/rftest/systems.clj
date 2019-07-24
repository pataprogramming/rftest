(ns rftest.systems
  (:require [system.core :refer [defsystem]]
            [com.stuartsierra.component :as component]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            (system.components
             [endpoint :refer [new-endpoint]]
             [handler :refer [new-handler]]
             [http-kit :refer [new-web-server]]
             [middleware :refer [new-middleware]]
             [repl-server :refer [new-repl-server]]
             [sente :refer [new-channel-sockets sente-routes]])
            [environ.core :refer [env]]
            [rftest.handler :refer [sente-handler ring-handler find-user-id site]]
            [taoensso.sente.server-adapters
             [http-kit :refer [sente-web-server-adapter]]]))

(defn dev-system
  []
  (component/system-map
   :sente          (new-channel-sockets sente-handler
                                        sente-web-server-adapter
                                        {:wrap-component? false
                                         :user-id-fn find-user-id})
   :sente-endpoint (component/using
                    (new-endpoint sente-routes)
                    [:sente])
   :routes         (new-endpoint ring-handler)
   :middleware     (new-middleware {:middleware [[wrap-defaults site-defaults]]
                                    :defaults site})
   :handler        (component/using
                    (new-handler)
                    [:sente-endpoint :routes :middleware])
   :web            (component/using
                    (new-web-server (Integer. (env :http-port)))
                    [:handler])))


;; (defsystem dev-system
;;   [:web (new-web-server (Integer. (env :http-port)) app)])

(def prod-system dev-system)

#_(defsystem prod-system
  [:web (new-web-server (Integer. (env :http-port)) app)
   :repl-server (new-repl-server (Integer. (env :repl-port)))])
