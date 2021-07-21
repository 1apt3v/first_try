import profileReducer, { addProfilePostAC, deletePost } from "./profileReducer";
import ReactDOM from 'react-dom'
import React from 'react'


let state = {
    posts: [
        { id: 1, body: 'Привет всем', likesCount: 1 },
        { id: 2, body: 'Как дела?', likesCount: 1 },
        { id: 3, body: 'Прогуляемся?', likesCount: 1 },
        { id: 4, body: 'Провожу интересно время', likesCount: 1 },
        { id: 5, body: 'Что-нибудь ещё рассказать?', likesCount: 1 },
    ]
}

test('length of post should be increment', () => {
    let action = addProfilePostAC("Hello World")

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(6)

});


test('message of new post should be correct', () => {
    let action = addProfilePostAC("Hello World")

    let newState = profileReducer(state, action)

    expect(newState.posts[5].body).toBe("Hello World")
})


test('after deleating lenght of message should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})