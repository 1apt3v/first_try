import React from "react"
import style from "./../Main.module.css"

const Btn = (props) => {
    return (
        <div className={style.item}>
            <button id={"btn-" + props.id}>Click</button>
        </div >
    )
}



export default Btn