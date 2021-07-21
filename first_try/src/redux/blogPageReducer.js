const initialState = {
    postsList: [
        { id: 1, name: "Блог 1" },
        { id: 2, name: "Блог 2" },
        { id: 3, name: "Блог 3" },
        { id: 4, name: "Блог 4" },
        { id: 5, name: "Блог 5" },
        { id: 6, name: "Блог 6" },
        { id: 7, name: "Блог 7" },
        { id: 8, name: "Блог 8" }
    ],
    posts: [
        { id: 1, body: "Привет всем!" }
    ]
}

const blogPageReducer = (state = initialState, action) => {
    return state

}

export default blogPageReducer