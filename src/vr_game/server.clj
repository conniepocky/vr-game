(ns vr-game.server
  (:require [org.httpkit.server :as kit]))

(defn app [req]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    "hello HTTP!"})


(defn -main []
  (kit/run-server app {:port 8080}))
