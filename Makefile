figwheel:
	clj -Sdeps "{:deps {com.bhauman/figwheel-main {:mvn/version \"0.2.0\"}}}}"  -m figwheel.main -b dev -r
