package utils

import (
	"github.com/gopherjs/gopherjs/es"
)

var axios = es.ImportNodeModule("axios", "Axios")

type axiosDef struct{}

func (a *axiosDef) Post(url string, params ...interface{}) *Promise {
	args := []interface{}{}
	args = append(args, url)
	args = append(args, params...)

	return &Promise{promise: axios.Call("post", args...)}
}

func (a *axiosDef) Get(url string, params ...interface{}) *Promise {
	args := []interface{}{}
	args = append(args, url)
	args = append(args, params...)

	return &Promise{promise: axios.Call("get", args...)}
}

var Axios = &axiosDef{}
