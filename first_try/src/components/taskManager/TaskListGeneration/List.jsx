import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './../TaskManager.module.css'


const List = (props) => {
    return (
        <NavLink to={"/taskmanager/" + props.lists.idList} className={style.taskBtn} activeClassName={style.activeLink}>{props.lists.listName}</NavLink>
    )
}

export default List