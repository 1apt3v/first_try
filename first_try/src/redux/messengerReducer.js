const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_TEXT = "UPDATE-MESSAGE"

const initialState = {
    users: [
        { id: 1, name: "Вова" },
        { id: 2, name: "Валера" },
        { id: 3, name: "Кристина" },
        { id: 4, name: "Дима" },
        { id: 5, name: "Юля" },
        { id: 6, name: "Анна" },
    ],
    messages: [
        { id: 1, message: "Привет" },
        { id: 2, message: "Как дела?" },
        { id: 3, message: "123" },
        { id: 4, message: "qwerty" },
    ],
    newMessageText: '',
}

const messengerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length, message: action.text }],
                newMessageText: ''
            }            
        }
        case UPDATE_TEXT: {
            return { 
                ...state,
                newMessageText: action.newText,
            }
        }
        default: {
            return state
        }
    }
}


export const addMessageActionCreator = text => ({
    type: "ADD-MESSAGE",
    text: text
})

export const updateTextActionCreator = text => ({
    type: "UPDATE-MESSAGE",
    newText: text
})

export default messengerReducer