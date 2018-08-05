package controllers

import (
	"github.com/revel/revel"
)

type App struct {
	*revel.Controller
}

func (c App) Index() revel.Result {
	c.Flash.Success("Success flash")
	c.Flash.Error("Error flash")
	c.Flash.Out["custom"] = "Custom flash"
	return c.Render()
}
