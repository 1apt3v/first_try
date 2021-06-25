import React from 'react'
import style from './Messenger.module.css'
import UsersMessenger from './users/UsersMessenger'
import Message from './messages/Message'

const Messenger = (props) => {
    debugger
    let usersElements = props.social.users.map(user => <UsersMessenger user={user} key={user.id} />)
    let messengerElements = props.social.messages.map(message => <Message message={message} key={message.id} />)

    let newMessengerElement = React.createRef()

    let textChange = () => {
        // let text = e.target.value; // первый способ 
        let text = newMessengerElement.current.value
        props.updateNewText(text)
    }

    let addMessage = () => {
        let text = newMessengerElement.current.value // второй способ
        props.addMessageText(text)
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
                        <div className={style.sendArea}>
                            <textarea className={style.text} onChange={textChange} value={props.social.newMessageText} ref={newMessengerElement} placeholder="Введите сообщение"></textarea>
                            <button className={style.buttonSend} onClick={addMessage}>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger