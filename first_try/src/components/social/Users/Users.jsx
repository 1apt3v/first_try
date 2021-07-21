import React from 'react'
import User from './User'


const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return (
        <div>
            {users.map(user => (
                <User user={user}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                    key={user.id} />)
            )}
        </div>
    )
}
export default Users