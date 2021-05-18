import React from "react"
import style from "./Footer.module.css"
import imgGoogle from "./img/imgGoogle.png"

const Footer = () => {
    return (
        
        <div className={style.footer}>
            <div className="list">
                <div className="item">
                    <a href="mailto:nikita@mmax.ru"><img src={imgGoogle} alt="" /></a>
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
        </div>
    )
}

export default Footer