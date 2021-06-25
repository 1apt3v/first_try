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
                            <NavLink to="/main">Главная</NavLink>
                        </div>
                        <div className={style.subitem}>
                            <NavLink to="#">Проекты</NavLink>
                        </div>
                        <div className={style.subitem}>
                            <NavLink to="/blog">Блог</NavLink>
                        </div>
                        <div className={style.subitem}>
                            <NavLink to="/taskmanager">Таск-менеджер</NavLink>
                        </div>
                        <div className={style.subitem}>
                            <NavLink to="/social/">Соц.Сеть</NavLink>
                        </div>
                    </div>
                    <div>
                        <p className={style.myName}><NavLink to="/social/profile">Никита Истомин</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header