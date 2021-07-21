const initialState = {
    lists: [
        { idList: 0, listName: "Список 1" },
        { idList: 1, listName: "Список 2" },
        { idList: 2, listName: "Список 3" },
        { idList: 3, listName: "Список 4" }
    ],
    tasks: [
        { idTask: 0, taskName: "Задача 1" },
        { idTask: 1, taskName: "Задача 2" },
        { idTask: 2, taskName: "Задача 3" },
        { idTask: 3, taskName: "Задача 4" },
        { idTask: 4, taskName: "Задача 5" },
        { idTask: 5, taskName: "Задача 6" },
        { idTask: 6, taskName: "Задача 7" },
        { idTask: 7, taskName: "Задача 8" },
    ],
    direction: [
        [1, 2, 1],
        [3, 1],
        [5, 6],
        [1, 7]
    ],
}

const taskManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}



export default taskManagerReducer