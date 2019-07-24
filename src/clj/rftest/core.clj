(ns rftest.core
  (:gen-class)
  (:require
   [system.repl :refer [set-init! start]]
   [rftest.systems :refer [prod-system]]))

(defn -main
  "Start a production system."
  [& args]
  (set-init! #'prod-system)
  (start))
