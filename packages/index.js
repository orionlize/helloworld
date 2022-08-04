// 2022-08-04 03:24:14.687972467 +0000 UTC m=+1.959860752
import Axios from "axios"
import {Input} from "antd"
window["antd"] = (function(){
	var obj = {}
	obj["src/app/app"] = {}
	obj["src/app/app"]["Input"] = Input
	return obj
})()
window["axios"] = (function(){
	var obj = {}
	obj["src/utils/utils"] = {}
	obj["src/utils/utils"]["Axios"] = Axios
	return obj
})()
