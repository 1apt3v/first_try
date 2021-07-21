import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import messengerReducer from './messengerReducer'
import blogPageReducer from './blogPageReducer'
import taskManagerReducer from './taskManagereReducer'
import usersReducer from './usersReducer'
import profileReducer from './profileReducer'
import authReducer from './authReducer'
import thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer} from 'redux-form'
import appReducer from './appReducer'


let reducers = combineReducers({
    social: messengerReducer,
    blogPage: blogPageReducer,
    taskManager: taskManagerReducer,
    usersPage: usersReducer,
    profile: profileReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)))

window.__store__ = store


export default store