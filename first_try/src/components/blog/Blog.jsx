import React from 'react'
import Posts from './posts/Posts'
import style from './Blog.module.css'



const Blog = (props) => {
    debugger
    let postsElements = props.blogPage.postsList.map(post => <Posts id={post.id} name={post.name} />)
    return (
        <div>
            <h1>Блог</h1>
            <div className={style.blog__wrap}>
                <div className={style.blog__list} id="blogList">
                    {postsElements}
                </div>
                <div className={style.blog__content}>

                </div>
            </div>
        </div>
    )
}

export default Blog