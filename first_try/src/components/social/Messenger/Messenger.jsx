import React from 'react'
import style from './Messenger.module.css'
import UsersMessenger from './users/UsersMessenger'
import Message from './messages/Message'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { maxLenghtCreator, required } from '../../../utils/validator/validators'

const maxLenght50 = maxLenghtCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.sendArea}>
                <Field className={style.text} component={Textarea} validate={[required, maxLenght50]} name="newMessageText" placeholder="Введите сообщение" />
                <button className={style.buttonSend}>Отправить</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

const Messenger = (props) => {
    let usersElements = props.social.users.map(user => <UsersMessenger user={user} key={user.id} />)
    let messengerElements = props.social.messages.map(message => <Message message={message} key={message.id} />)

    let addNewMessage = (values) => {
        props.addMessageText(values.newMessageText)
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'} />
    }

    return (
        <div>
            <div>
                <h1>Социальная сеть</h1>
                <div className={style.social__wrap}>
                    <div className={style.social__list} id="socialList">
                        {usersElements}
                    </div>
                    <div className={style.messenger}>
                        {messengerElements}
                        <AddMessageFormRedux onSubmit={addNewMessage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger