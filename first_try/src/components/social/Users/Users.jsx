import React from 'react'
import style from './User.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://s4.vcdn.biz/static/f/2312200741/image.jpg', followed: false, name: "Никита", status: "Всем привет!", location: { city: "Тюмень", country: "Россия" } },
            { id: 2, photoUrl: 'https://s4.vcdn.biz/static/f/2312200741/image.jpg', followed: true, name: "Кристина", status: "Всем привет!", location: { city: "Санкт-Петербург", country: "Россия" } },
            { id: 3, photoUrl: 'https://s4.vcdn.biz/static/f/2312200741/image.jpg', followed: false, name: "Даниил", status: "Всем привет!", location: { city: "Москва", country: "Россия" } }
        ])
    }


    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img className={style.ImageUser} src={user.photoUrl} />
                    </div>
                    <div>
                        {
                            user.followed ?
                                <button onClick={() => { props.unfollow(user.id) }}>Отписаться</button>
                                : <button onClick={() => { props.follow(user.id) }}>Подписаться</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>
            )}
        </div>
    )
}

export default Users