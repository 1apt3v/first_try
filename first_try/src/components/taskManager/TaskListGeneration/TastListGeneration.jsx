import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './../TaskManager.module.css'

const TaskListGeneration = (props) => {
    return (
        <NavLink to={"/taskmanager/" + props.tasks.id} className={style.taskBtn} activeClassName={style.activeLink}>{props.tasks.name}</NavLink>
    )
}

export default TaskListGeneration