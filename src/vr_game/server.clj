(ns vr-game.server
  (:require [org.httpkit.server :as kit]))

(def users (atom (set )))

(defn app [req]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    "Hello HTTP!"})

(defn -main []
  (kit/run-server app {:port 8080}))

(defn handler [req]
   (with-channel req channel              ; get the channel
    ;; communicate with client using method defined above
    (swap! users conj channel)
    (on-close channel (fn [status]
                        (println "channel closed")))
    (if (websocket? channel)
      (println "WebSocket channel")
      (println "HTTP channel"))
    (on-receive channel (fn [data]       ; data received from client
           ;; An optional param can pass to send!: close-after-send?
           ;; When unspecified, `close-after-send?` defaults to true for HTTP channels
           ;; and false for WebSocket.  (send! channel data close-after-send?)
                          (send! channel data))))) ; data is sent directly to the client
(run-server handler {:port 8080})


