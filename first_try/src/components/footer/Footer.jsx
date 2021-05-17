import React from "react"
import style from "./Footer.module.css"
import imgGoogle from "./img/imgGoogle.png"

const Footer = () => {
    return (
        
        <div className={style.footer}>
            <img src={image} alt="" />
            <div className="list">
                <div className="item">
                    <a href="mailto:nikita@mmax.ru"></a>
                </div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
        </div>
    )
}

export default Footer