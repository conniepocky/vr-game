(ns vr-game.server
  (:require [manifold.stream :as s]
            [aleph.http :as http]))

(def broadcast-subscribers (atom #{}))
(def broadcast-s (s/stream))
(s/consume (fn [msg]
             (doseq [sub @broadcast-subscribers]
               (s/put! sub msg)))
           broadcast-s)
(defn sub! [stream] (swap! broadcast-subscribers conj stream))

(defn echo-handler [req]
  (let [s @(http/websocket-connection req)]
    (sub! s)
    (s/connect s broadcast-s)))

(defonce server (http/start-server #'echo-handler {:port 8081}))
