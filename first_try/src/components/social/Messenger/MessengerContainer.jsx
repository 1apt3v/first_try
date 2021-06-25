import React from 'react'
import { connect } from 'react-redux'
import { updateTextActionCreator, addMessageActionCreator } from './../../../redux/messengerReducer'
import Messenger from './Messenger'

const mapStateToProps = (state) => {
    return {
        social: state.social
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessageText: (text) => {
            dispatch(addMessageActionCreator(text))
        },
        updateNewText: (text) => {
            dispatch(updateTextActionCreator(text))
        }
    }
}


const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger)

export default MessengerContainer