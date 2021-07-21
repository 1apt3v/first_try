import React from "react"
import { NavLink } from "react-router-dom"
import style from "./Header.module.css"

const Header = (props) => {
    return (
        <header>
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
                            <div className={style.loginBlock}>
                                {props.isAuth
                                    ? <div>
                                        <NavLink to={'/social/profile'}>{props.login}</NavLink>
                                        -
                                        <button onClick={props.logout}>Выйти</button>
                                    </div>
                                    : <NavLink to={'/login'}>Авторизоваться</NavLink>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header