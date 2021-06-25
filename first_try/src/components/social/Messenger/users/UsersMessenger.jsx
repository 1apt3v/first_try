import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './../Messenger.module.css'

const UsersMessenger = (props) => {
    return (
        <div data_user_id={props.user.id} className={style.social__item}>
            <NavLink to={"/social/messenger/" + props.user.id} activeClassName={style.activeLink}>
                {props.user.name}
            </NavLink>
        </div>
    )
}


export default UsersMessenger

