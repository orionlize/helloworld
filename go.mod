module github.com/zq2820/helloworld

go 1.18

require honnef.co/go/js/dom v0.0.0-20210725211120-f030747120f2

require (
	github.com/gopherjs/jsbuiltin v0.0.0-20180426082241-50091555e127 // indirect
	github.com/jinzhu/copier v0.3.5
)

require (
	github.com/gopherjs/gopherjs v1.17.2
	honnef.co/go/js/console v0.0.0-20150119023344-105276c43558
	myitcv.io v0.0.0-20201125173645-a7167afc9e13
)

require github.com/speps/go-hashids v1.0.0 // indirect

replace github.com/gopherjs/gopherjs v1.17.2 => github.com/zq2820/gopherjs v0.0.0-20220804015823-b01a61235ef3

replace myitcv.io v0.0.0-20201125173645-a7167afc9e13 => github.com/zq2820/x v0.0.0-20220804020614-b6dce56e99ee
