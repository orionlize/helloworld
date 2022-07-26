package fun

import (
	"myitcv.io/react"
)

type FunDef struct {
	react.FunctionComponent[FunProps]
}

type FunProps struct {
	react.Props
	Text string
}

func (p FunProps) EqualsIntf(v react.Props) bool {
	return false
}

func (f *FunDef) Default(props *FunProps, children ...react.Element) react.Element {
	state, _ := react.UseState("~~")

	return react.Div(nil, react.S(props.Text+state.String()), react.Fragment(children...))
}
