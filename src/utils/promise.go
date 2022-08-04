package utils

import "github.com/gopherjs/gopherjs/js"

type Promise struct {
	promise *js.Object
}

func NewPromise(handler func(resolve, reject func(interface{}))) *Promise {
	return &Promise{promise: js.Global.Get("Promise").New(handler)}
}

func (p *Promise) Then(then func(data *js.Object)) *Promise {
	return &Promise{
		promise: p.promise.Call("then", then),
	}
}

func (p *Promise) Catch(catch func(err *js.Object)) *Promise {
	return &Promise{
		promise: p.promise.Call("catch", catch),
	}
}

func (p *Promise) Finally(finally func()) {
	p.promise.Call("finally", finally)
}
