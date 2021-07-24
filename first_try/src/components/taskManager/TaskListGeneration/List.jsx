import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './../TaskManager.module.css'


const List = ({body, id}) => {
    return (
        <NavLink to={"/taskmanager/" + id} className={style.taskBtn} activeClassName={style.activeLink}>{body}</NavLink>
    )
}

export default List