import {combineReducers, createStore} from 'redux'
import messengerReducer from './messengerReducer'
import blogPageReducer from './blogPageReducer'
import taskManagerReducer from './taskManagereReducer'
import usersReduce from './usersReducer'


let reducers = combineReducers({
    social: messengerReducer,
    blogPage: blogPageReducer,
    taskManager: taskManagerReducer,
    usersPage: usersReduce,
})

let store = createStore(reducers)


export default store