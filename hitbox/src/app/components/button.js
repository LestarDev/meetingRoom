import React from "react";

const ButtonComponent = {
    DatePicker: function DatePicker(props){
        return (`
            <div>Imie: {props.color}</div>
        `)
    }
}

function BlueMyComponent() {
    return ButtonComponent.DatePicker(color="blue")
}

export default ButtonComponent