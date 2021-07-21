import React from 'react'
import Preloader from '../../../common/Preloader/Preloader'
import userNull from './../../../../assets/images/userNull.png'
import facebookIcon from './../../../../assets/images/icons/facebookIcon.png'
import style from './../Profile.module.css'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({ profile, status, updateStatus }) => {
    if (!profile) {
        return (
            <Preloader />
        )
    }

    return (
        <div className={style.profileInfo}>
            <div className={style.imgAvatar}>
                <img src={profile.photos.large != null ? profile.photos.large : userNull} alt="" />
            </div>
            <div className={style.description}>
                <div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                </div>
                <div>{`Имя: ${profile.fullName != null ? profile.fullName : 'Нет данных'}`}</div>
                <div>{`Обо мне: ${profile.aboutMe != null ? profile.aboutMe : 'Нет данных'}`}</div>
                <div>{`Работа: ${profile.lookingForAJob ? 'Работаю' : 'Безработный'}`}</div>
                <div>{`Описание работы: ${profile.lookingForAJobDescription != null ? profile.lookingForAJobDescription : 'Нет данных'}`}</div>
                <div>
                    <div className={style.contacts_icon}><a href={profile.contacts.facebook != null ? profile.contacts.facebook : null}><img src={profile.contacts.facebook ? facebookIcon : facebookIcon} alt="" /></a></div>
                    {/* <div><img src={props.profile.contacts.website} alt="" /></div>
                    <div><img src={props.profile.contacts.vk} alt="" /></div>
                    <div><img src={props.profile.contacts.twitter} alt="" /></div>
                    <div><img src={props.profile.contacts.instagram} alt="" /></div>
                    <div><img src={props.profile.contacts.youtube} alt="" /></div>
                    <div><img src={props.profile.contacts.github} alt="" /></div>
                    <div><img src={props.profile.contacts.mainlink} alt="" /></div> */}
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo