(ns vr-game.client
  (:require [reagent.core :as reagent :refer [atom]]))

(def ws (js/WebSocket. "ws://localhost:8080"))

;;192.168.1.255:8080

(def msgs (atom ["hi" "hello" "i like food"]))

(set! (.-onmessage ws) (fn [msg] 
                         (swap! msgs conj msg)))

(defn hello-world []
  [:div
   [:a-assets
    [:img {:src "https://res.cloudinary.com/dexhx07lb/image/upload/v1557585843/5a4bc99c2da5ad73df7efe66.png" :id "person"}]]
   [:a-scene
    (for [msg @msgs]
      (def i (dec i))
      [:a-text {:color "black" :value  msg  :position (str "-1 " i " -2")}])
    [:a-plane
     {:color "#BBC0C6",
      :height "9000",
      :width "9000", 
      :rotation "-90 0 0",
      :position "0 0 -4"}]
    [:a-sky {:color "white"}]]])
            


(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))

(defn on-js-reload []  
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application  
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )          
