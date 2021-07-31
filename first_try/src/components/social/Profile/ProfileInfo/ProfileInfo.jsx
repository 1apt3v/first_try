import React, { useState } from 'react'
import Preloader from '../../../common/Preloader/Preloader'
import userNull from './../../../../assets/images/userNull.png'
// import facebookIcon from './../../../../assets/images/icons/facebookIcon.png'
import style from './../Profile.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm'


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false)


    if (!profile) {
        return (
            <Preloader />
        )
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }

    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })

    }

    return (
        <div className={style.profileInfo}>
            <div className={style.avatar}>
                <label htmlFor="photoLoad">
                    <img alt="avatar" src={profile.photos.large != null ? profile.photos.large : userNull} />
                </label>
                {isOwner && <input id={"photoLoad"} type={"file"} onChange={onMainPhotoSelected} />}
            </div>
            {editMode
                ? <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit} />
                : <ProfileData profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}
        </div>
    )
}


const ProfileData = ({ profile, status, updateStatus, isOwner, goToEditMode }) => {
    return (
        <div className={style.description}>
            <div className={style.fullName}>{`${profile.fullName != null ? profile.fullName : 'Нет данных'}`}</div>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            <hr />
            <div>{`Обо мне: ${profile.aboutMe != null ? profile.aboutMe : 'Нет данных'}`}</div>
            <div>{`Работа: ${profile.lookingForAJob ? 'Работаю' : 'Безработный'}`}</div>
            <div>{`Описание работы: ${profile.lookingForAJobDescription != null ? profile.lookingForAJobDescription : 'Нет данных'}`}</div>
            <div className={style.contant_container}>
                <hr />
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                })}
            </div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Редактировать</button>
            </div>}

        </div>
    )
}



const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={style.contacts_icon}>
            {contactTitle} - {contactValue}
            {/* <img src={contactTitle ? `` : ''} alt="123" /> */}
        </div>
    )
}


export default ProfileInfo