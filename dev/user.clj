(ns user)

(defn reload []
  (load-file "src/vr_game/server.clj")
  (use 'vr-game.server))
