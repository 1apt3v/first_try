import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './../Blog.module.css'

const Posts = (props) => {
    return (
        <div data_list_id={props.id} className={style.blog__item}>
            <NavLink to={"/blog/" + props.id} activeClassName={style.activeLink}>
                {props.name}
            </NavLink>
        </div>
    )
}




export default Posts

