(ns vr-game.core
    (:require [manifold-cljs.stream :as s]
              [manifold-cljs.deferred :as d]
              [reagent.core :as reagent :refer [atom]]))

(defn hello-world []
  [:div
   [:a-scene
     [:a-box
       {:color "#4CC3D9", :rotation "0 45 0", :position "-1 0.5 -3"}]
     [:a-sphere {:color "#EF2D5E", :radius "1.25", :position "0 1.25 -5"}]
     [:a-cylinder  
      {:color "#FFC65D",
       :height "1.5",
       :radius "0.5",
       :position "1 0.75 -3"}]
     [:a-plane
       {:color "#7BC8A4",
        :height "4",
        :width "4",
        :rotation "-90 0 0",
        :position "0 0 -4"}]
     [:a-sky {:color "#ECECEC"}]]])


(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
