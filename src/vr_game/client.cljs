(ns vr-game.client
  (:require [reagent.core :as reagent :refer [atom]]))

(defonce ws (js/WebSocket. "ws://192.168.1.227:8081"))

;;192.168.1.255:8080

(def msgs (atom ["hello there" "there is a field at the bottom" "and you are strictly prohibited to touch type and hit 'enter' on it!"]))

(set! (.-onmessage ws) (fn [msg]
                         (swap! msgs conj (.-data msg))))

(defn hello-world []
  [:div
   #_[:a-assets
    [:img {:src "https://res.cloudinary.com/dexhx07lb/image/upload/v1557585843/5a4bc99c2da5ad73df7efe66.png" :id "person"}]]
   [:a-scene
    (map-indexed (fn [idx msg]
                   ^{:key idx} ;; supply id for each element, a way to tell ReactJS their edentity for lifecycle stuff ~_~
                   [:a-text {:color "black" :value  msg  :position (str "-1 " (+ (/ idx 3) 1) " -2")}])
                 @msgs)
    [:a-plane
     {:color "#BBC0C6",
      :height "9000",
      :width "9000",
      :rotation "-90 0 0",
      :position "0 0 -4"}]
    [:a-sky {:color "white"}]]
   [:input#input-field {:style {:position "fixed"
                                :bottom "0px"}
                        :on-key-press (fn [dom-event]
                                        (println "DUH:" dom-event)
                                        (when (= "Enter" (.-key dom-event))
                                          (let [field (.getElementById js/document "input-field")]
                                            (.send ws (.-value field))
                                            (set! (.-value field) ""))))}]
   ])


(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))

(defn on-js-reload []  
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application  
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )          
