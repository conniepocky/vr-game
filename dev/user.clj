(ns user
  (:require [aleph.http :as http]
            [manifold.stream :as s])
  (:use vr-game.server
        clojure.datafy ;; a handy tool to inspect entities: (datafy entity)
        ))

(defn reload
  "Presents latest code in run-time"
  []
  (load-file "src/vr_game/server.clj")
  (use 'vr-game.server))
