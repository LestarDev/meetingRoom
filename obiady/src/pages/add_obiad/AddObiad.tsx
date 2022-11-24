import React, { useRef } from "react"
import "./AddObiad.css"

const AddObiad = () => {

    const kalendarzRef = useRef<HTMLDivElement>(null);

    const odznacz = () => {
        
    }

    const selectColumn = (whichOne: number) => {
        odznacz()
        for(let i=9; i<56; i+=8){
            kalendarzRef.current!.children[i].className+=" zaznaczony";
        }
    }
    return (
        <>
            <div className="Kalendarz" ref={kalendarzRef}>
                <div className="Kalendarz-blank"></div> <div onClick={(e: React.MouseEvent)=>{selectColumn(1)}}><p>PON</p></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
                <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
                <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
                <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
                <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
                <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
                <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
            </div>
        </>
    )
}
export default AddObiad