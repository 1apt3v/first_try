import { stopSubmit } from "redux-form"
import { usersAPI, profileAPI } from "../api/api"
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const ADD_PROFILE_POST = "ADD_PROFILE_POST"
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    profile: null,
    posts: [
        { id: 1, body: 'Привет всем', likesCount: 1 },
        { id: 2, body: 'Как дела?', likesCount: 1 },
        { id: 3, body: 'Прогуляемся?', likesCount: 1 },
        { id: 4, body: 'Провожу интересно время', likesCount: 1 },
        { id: 5, body: 'Что-нибудь ещё рассказать?', likesCount: 1 },
    ],
    status: ""
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_USER_STATUS: {
            return { ...state, status: action.status }
        }
        case ADD_PROFILE_POST: {
            let newProfilePost = {
                id: 5,
                body: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newProfilePost]
            }
        }
        case DELETE_POST: {
            return { ...state, posts: [...state.posts.filter(p => p.id != action.postId)] }
        }
        case SAVE_PHOTO_SUCCESS: {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }
        default: {
            return state
        }
    }
}



export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const addProfilePostAC = (newPostText) => ({ type: ADD_PROFILE_POST, newPostText })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('editProfile', { _error: response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
        // dispatch(stopSubmit('editProfile', {"contacts": {"facebook": response.data.messages[0]}} ))
    }
}



export default profileReducer