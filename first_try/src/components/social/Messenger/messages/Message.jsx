import React from 'react'
import style from './../Messenger.module.css'


const Message = (props) => {
    return (
        <div data_message_id={props.message.id} className={style.message}>
            {props.message.message}
        </div>
    )
}

export default Message