import React from "react"
import { NavLink } from "react-router-dom"
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.list}>
                <div className={style.item}>
                    <div className={style.list__subitem}>
                        <div className={style.subitem}>
                            <NavLink to="/main">Home</NavLink>
                        </div>
                        <div className={style.subitem}>
                            <NavLink to="#">About</NavLink>
                        </div>
                        <div className={style.subitem}>
                            <NavLink to="/dialogs">Блог</NavLink>
                        </div>
                        <div className={style.subitem}>
                            <NavLink to="#">Audios</NavLink>
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