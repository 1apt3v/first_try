import messengerReducer from "./messengerReducer"

let store = {
    // _state: {
    //     social: {
    //         users: [
    //             { id: 1, name: "Вова" },
    //             { id: 2, name: "Валера" },
    //             { id: 3, name: "Кристина" },
    //             { id: 4, name: "Дима" },
    //             { id: 5, name: "Юля" },
    //             { id: 6, name: "Анна" },
    //         ],
    //         messages: [
    //             { id: 1, message: "Привет" },
    //             { id: 2, message: "Как дела?" },
    //             { id: 3, message: "123" },
    //             { id: 4, message: "qwerty" },
    //         ],
    //         newMessageText: '',
    //     },

    //     // -----------------------------------

    //     blogPage: {
    //         postsList: [
    //             { id: 1, name: "Блог 1" },
    //             { id: 2, name: "Блог 2" },
    //             { id: 3, name: "Блог 3" },
    //             { id: 4, name: "Блог 4" },
    //             { id: 5, name: "Блог 5" },
    //             { id: 6, name: "Блог 6" },
    //             { id: 7, name: "Блог 7" },
    //             { id: 8, name: "Блог 8" }
    //         ],
    //         posts: [
    //             { id: 1, heading: "Заголовок 1", }
    //         ]
    //     },

    //     taskManager: {
    //         lists: [
    //             { idList: 0, listName: "Список 1" },
    //             { idList: 1, listName: "Список 2" },
    //             { idList: 2, listName: "Список 3" },
    //             { idList: 3, listName: "Список 4" }
    //         ],
    //         tasks: [
    //             { idTask: 0, taskName: "Задача 1" },
    //             { idTask: 1, taskName: "Задача 2" },
    //             { idTask: 2, taskName: "Задача 3" },
    //             { idTask: 3, taskName: "Задача 4" },
    //             { idTask: 4, taskName: "Задача 5" },
    //             { idTask: 5, taskName: "Задача 6" },
    //             { idTask: 6, taskName: "Задача 7" },
    //             { idTask: 7, taskName: "Задача 8" },
    //         ],
    //         direction: [
    //             [1, 2, 1],
    //             [3, 1],
    //             [5, 6],
    //             [1, 7]
    //         ],
    //     }
    // },


    getState() {
        return this._state
    },

    _callSubscriber() {
        this.getState()
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    // updateText(newText) {

    // },

    // addMessage(text) {

    // },

    dispatch(action) {
        this._state.social = messengerReducer(this._state.social, action)
        this._callSubscriber(this._state)
    }
}






export let updateNewText = (newText) => {
    store.updateText(newText)
}

export let addMessageText = (text) => {
    store.addMessage(text)
}

export let updateText = (newText) => {
    store._state.social.newMessageText = newText
    store._callSubscriber(store._state)
}

export let newTaskListF = (newTaskList) => {
    // debugger
    let newList = {
        id: store.getState().taskManager.lists.length + 1,
        name: newTaskList
    }
    store.getState().taskManager.lists.push(newList)

}


export let newTaskF = (newTaskName) => {
    // debugger
    let idList = 0
    let newTask = {
        idList: 1,
        // idTask: state.taskManager.tasks.length + 1,
        idTask: 1,
        // name: state.taskManager.tasks[idList].name.push(newTaskName),
        name: [newTaskName]
    }
    store.getState().taskManager.tasks.push(newTask)
}




export default store
