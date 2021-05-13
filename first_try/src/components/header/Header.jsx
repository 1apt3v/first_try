import React from "react"
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.list}>
                <div className={style.item}>
                    <div className={style.list__subitem}>
                        <div className={style.subitem}>
                            <a href="#">Home</a>
                        </div>
                        <div className={style.subitem}>
                            <a href="#">About</a>
                        </div>
                        <div className={style.subitem}>
                            <a href="#">Блог</a>
                        </div>
                        <div className={style.subitem}>
                            <a href="#">Audios</a>
                        </div>
                    </div>
                    <div>
                        <p className={style.myName}><a href="#">Никита Истомин</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header