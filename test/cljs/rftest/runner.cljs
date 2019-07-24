(ns rftest.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [rftest.core-test]))

(doo-tests 'rftest.core-test)
