import React from 'react'
import PostsContainer from '../Posts/PostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
    return (
        <div>
            <div>
                <h1>Профиль</h1>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />

                <PostsContainer />
            </div>
        </div>
    )
}

export default Profile