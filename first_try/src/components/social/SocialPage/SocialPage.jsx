import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import style from "./SocialPage.module.css"
import MessengerContainer from './../Messenger/MessengerContainer'
import UsersContainer from './../Users/UsersContainer'
import ProfileContainer from '../Profile/ProfileContainer'
import profileImg from "./img/profile.svg"
import messengerImg from "./img/messenger.svg"
import usersImg from "./img/users.svg"

const SocialPage = (props) => {
    return (
        <div className={style.container}>
            <div className={style.sidebar}>
                <ul>
                    <li>
                        <NavLink className={style.item} to={"/social/profile/"}>
                            <img alt="profileImg" src={profileImg} />
                            <span>Профиль</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={style.item} to="/social/messenger">
                            <img alt="messengerImg" src={messengerImg} />
                            <span>Сообщения</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={style.item} to="/social/users">
                            <img alt="usersImg" src={usersImg} />
                            <span>Пользователи</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Route path="/social/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/social/messenger" render={() => <MessengerContainer social={props.social} dispatch={props.dispatch} />} />
            <Route path="/social/users" render={() => <UsersContainer />} />
        </div>
    )
}

export default SocialPage