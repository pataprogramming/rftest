(ns rftest.views
  (:require
   [re-frame.core :as re-frame]
   [rftest.subs :as subs]
   ))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div
     [:h1 "Hello from me, " @name]
     ]))
