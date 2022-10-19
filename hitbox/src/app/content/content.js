import React from "react"
import ButtonComponent from "../components/button.js"

function WarningButton() {
    return ButtonComponent(color="red")
}

export const Content = () => {
    return (
        WarningButton()
        `<div></div>`
    )
}