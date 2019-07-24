(defproject rftest "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [org.clojure/core.async "0.4.500"]
                 [compojure "1.6.1"]
                 [reagent "0.8.1"]
                 [re-frame "0.10.8"]
                 [compojure "1.6.1"]
                 [com.taoensso/sente "1.11.0"]
                 ;[org.clojure/core.match "0.3.0"]
                 [yogthos/config "1.1.4"]
                 [environ "1.0.0"]
                 [ring/ring "1.7.1"]
                 [ring/ring-defaults "0.1.5"]
                 [compojure "1.5.0"]
                 [hiccup "1.0.5"]
                 [http-kit "2.3.0"]
                 [org.danielsz/system "0.4.3"]
                 [com.cognitect/transit-clj "0.8.313"]
                 [com.cognitect/transit-cljs "0.8.256"]
                 [com.taoensso/encore "2.114.0"]
                 [com.taoensso/timbre "4.10.0"]]
  :plugins [;[lein-environ "1.0.0"]
            [lein-cljsbuild "1.1.7"]]
  :min-lein-version "2.5.3"
  :source-paths ["src/clj" "src/cljs"]
  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"
                                    "test/js"]
  :figwheel {:css-dirs ["resources/public/css"]
             :ring-handler rftest.handler/dev-handler}
  :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}
  :profiles {:dev {:source-paths ["dev"]
                   :env {:http-port 3000}
                   :dependencies [[binaryage/devtools "0.9.10"]
                                  [day8.re-frame/re-frame-10x "0.4.2"]
                                  [day8.re-frame/tracing "0.5.3"]
                                  [figwheel-sidecar "0.5.19"]
                                  [cider/piggieback "0.4.1"]]
                   :plugins      [[lein-figwheel "0.5.18"]
                                  [lein-doo "0.1.8"]]}
             :prod {:env {:http-port 8000
                          :repl-port 8001}
                    :dependencies [[org.clojure/tools.nrepl "0.2.12"]
                                   [day8.re-frame/tracing-stubs "0.5.3"]]}
             :uberjar {:omit-source  true
                       :main         rftest.server
                       :aot          [rftest.server]
                       :uberjar-name "rftest.jar"
                       :prep-tasks   ["compile" ["cljsbuild" "once" "min"]]}}
  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "rftest.core/mount-root"}
     :compiler     {:main                 rftest.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :preloads             [devtools.preload
                                           day8.re-frame-10x.preload]
                    :closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true
                                           "day8.re_frame.tracing.trace_enabled_QMARK_" true}
                    :external-config      {:devtools/config {:features-to-install :all}}
                    }}

    {:id           "min"
     :source-paths ["src/cljs"]
     :jar true
     :compiler     {:main            rftest.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}

    {:id           "test"
     :source-paths ["src/cljs" "test/cljs"]
     :compiler     {:main          rftest.runner
                    :output-to     "resources/public/js/compiled/test.js"
                    :output-dir    "resources/public/js/compiled/test/out"
                    :optimizations :none}}
    ]}
  :main ^:skip-aot rftest.core
  :target-path "target/%s")
