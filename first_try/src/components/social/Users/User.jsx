import React from 'react'
import style from './Users.module.css'
import userNull from './../../../assets/images/userNull.png'
import { NavLink } from "react-router-dom"

const User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div key={user.id} className={style.user}>
            <div className={style.userWrapper}>
                <div>
                    <NavLink to={"/social/profile/" + user.id}>
                        <img className={style.ImageUser} src={user.photos.small != null ? user.photos.small : userNull} />
                    </NavLink>
                </div>
                <div className={`${style.buttonFollowUnfollow} ${user.followed ? style.unfollow : style.follow}`}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Отписаться</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Подписаться</button>}
                </div>
            </div>
            <div>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>

                </span>
            </div>
        </div>
    )
}
export default User