import React from 'react'
import Posts from './blogPosts/BlogPosts'
import style from './Blog.module.css'
import { Field, reduxForm } from 'redux-form'

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea" />
            </div>
            <div><button>Отправить</button></div>
        </form>
    )
}

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)


let onAddPost = (values) => {
    // addPost(values.newPostText)
}


const Blog = (props) => {
    let postsElements = props.blogPage.posts.map(post => <Posts id={post.id} body={post.body} />)
    return (
        <div>
            <h1>Блог</h1>
            <div className={style.blog__wrap}>
                <div className={style.blog__list} id="blogList">

                </div>
                <div className={style.blog__content}>
                    {postsElements}
                    <AddNewPostForm onSubmit={onAddPost} />
                </div>
            </div>
        </div>
    )
}

export default Blog