import React from 'react'
import { reduxForm } from 'redux-form'
import { createField, Input, Textarea } from '../../../common/FormsControls/FormsControls'
import style from './../Profile.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={style.description}>
                <div>
                    <button>Сохранить</button>
                </div>
                {error && <div className={style.formSummeryError}>
                    {error}
                </div>}
                <div>{`Имя:`} {createField("Full name", 'fullName', [], Input)}
                </div>
                <div>{`Обо мне: `}{createField('About me', 'aboutMe', [], Textarea)}</div>
                <div>{`Работа:`}{createField("", 'lookingForAJob', [], Input, { type: "checkbox" })}</div>
                <div>{`Описание работы:`} {createField("ProfessionalSkills", 'lookingForAJobDescription', [], Textarea)} </div>
                <div>
                    {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={style.contact}>
                            {key}: {createField(key, 'contacts.' + key, [], Input)}
                        </div>
                    })}

                    {/* <div className={style.contacts_icon}><a href={profile.contacts.facebook != null ? profile.contacts.facebook : null}><img src={profile.contacts.facebook ? facebookIcon : facebookIcon} alt="" /></a></div> */}
                </div>
            </div>
        </form >
    )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormReduxForm