package core

type LinearError struct {
	IsLinearError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewLinearError(code string, msg string, ctx *Context) *LinearError {
	return &LinearError{
		IsLinearError: true,
		Sdk:              "Linear",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *LinearError) Error() string {
	return e.Msg
}
