import React from "react"
import style from "./Footer.module.css"
import imgGoogle from "./img/imgGoogle.png"
import imgGitHub from "./img/imgGitHub.png"
import imgVK from "./img/imgVK.png"

const Footer = () => {
    return (
        
        <div className={style.footer}>
            <div className={style.list}>
                <div className={style.item}>
                    <a href="mailto:nikita@mmax.ru"><img src={imgGoogle} alt="" /></a>
                </div>
                <div className={style.item}>
                    <a href="https://github.com/1apt3v"><img src={imgGitHub} alt="" /></a>
                </div>
                <div className={style.item}>
                    <a href="https://vk.com/lapfull"><img src={imgVK} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer