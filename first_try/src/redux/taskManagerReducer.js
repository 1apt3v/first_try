const SET_NEW_LIST = 'SET_NEW_LIST'
const PUSH_NEW_TASK = 'PUSH_NEW_TASK'
const DELETE_TASK = 'DELETE_TASK'
const DELETE_LIST = 'DELETE_LIST'

const RENAME_TASK = 'RENAME_TASK'
const RENAME_LIST = 'RENAME_LIST'

const initialState = {
    lists: [
        { id: 1, body: "Список 1" },
        { id: 2, body: "Список 2" },
        { id: 3, body: "Список 3" },
        { id: 4, body: "Список 4" }
    ],
    tasks: [
        { id: 0, body: null },
        { id: 1, body: "Задача 1" },
        { id: 2, body: "Задача 2" },
        { id: 3, body: "Задача 3" },
        { id: 4, body: "Задача 4" },
        { id: 5, body: "Задача 5" },
        { id: 6, body: "Задача 6" },
        { id: 7, body: "Задача 7" },
        { id: 8, body: "Задача 8" },
    ],
    direction: [
        [null],
        [1, 2, 6],
        [5, 6],
        [1, 7],
        []
    ],

    // lists: [],
    // tasks: [{id: null, body: null}],
    // direction: [
    //     [null]
    // ],
}

const taskManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_LIST: {
            const newList = { id: state.lists[state.lists.length - 1].id + 1, body: action.name }
            return {
                ...state,
                lists: [...state.lists, newList],
                direction: [...state.direction, []]
            }
        }
        case PUSH_NEW_TASK: {
            const newTask = { id: state.tasks[state.tasks.length - 1].id + 1, body: action.bodyTask }
            let newDirection = [...state.direction]
            newDirection[action.idList] = [...newDirection[action.idList], state.tasks[state.tasks.length - 1].id + 1]

            const newState = {
                ...state,
                tasks: [...state.tasks, newTask],
                direction: newDirection
            }
            return newState
        }
        case RENAME_TASK: {
            let tasks = [...state.tasks]
            if (action.newName === undefined) {
                return { ...state }
            } else {
                tasks[action.idTask].body = action.newName
                return {
                    ...state,
                    tasks: tasks
                }
            }
        }

        case DELETE_TASK: {
            let tasks = [...state.tasks]
            let tasksFiltered = tasks.filter(task => {
                return task.id !== action.idTask
            })

            let direction = [...state.direction]
            direction[action.idList] = direction[action.idList].filter(directionItem => {
                return directionItem !== action.idTask
            })
            return {
                ...state,
                tasks: tasksFiltered,
                direction: direction
            }
        }
        case RENAME_LIST: {
            let lists = [...state.lists]
            if (action.newName === undefined) {
                return { ...state }
            } else {
                lists[action.idList - 1].body = action.newName
                return {
                    ...state,
                    lists: lists
                }
            }
        }

        case DELETE_LIST: {
            let lists = [...state.lists]
            let listsFiltered = lists.filter(list => {
                return list.id !== action.idList
            })

            let direction = [...state.direction]
            direction = direction.filter(directionList => {
                return directionList !== action.idList
            })
            return {
                ...state,
                lists: listsFiltered,
                direction: direction
            }
        }
        default:
            return state
    }
}

export const setNewListAC = (name) => ({ type: SET_NEW_LIST, name })
export const setNewTaskAC = (idList, bodyTask) => ({ type: PUSH_NEW_TASK, idList, bodyTask })
export const renameTaskAC = (idList, idTask, newName) => ({ type: RENAME_TASK, idTask, idList, newName })
export const renameListAC = (idList, newName) => ({ type: RENAME_LIST, idList, newName })
export const deleteTaskAC = (idTask, idList) => ({ type: DELETE_TASK, idTask, idList })
export const deleteListAC = (idList) => ({ type: DELETE_LIST, idList })

export const setNewList = (name) => {
    return (dispatch) => {
        dispatch(setNewListAC(name))
    }
}

export const setNewTask = (idList, bodyTask) => {
    return (dispatch) => {
        dispatch(setNewTaskAC(idList, bodyTask))
    }
}

export const renameTask = (idList, idTask, newName) => {
    return (dispatch) => {
        dispatch(renameTaskAC(idList, idTask, newName))
    }
}

export const deleteTask = (idTask, idList) => {
    return (dispatch) => {
        dispatch(deleteTaskAC(idTask, idList))
    }
}

export const renameList = (idList, newName) => {
    return (dispatch) => {
        dispatch(renameListAC(idList, newName))
    }
}

export const deleteList = (idList) => {
    return (dispatch) => {
        dispatch(deleteListAC(idList))
    }
}

export default taskManagerReducer