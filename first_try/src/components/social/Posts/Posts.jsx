import React from 'react';
import OnePost from './OnePost';
import { Field, reduxForm } from 'redux-form'
import { required, maxLenghtCreator } from '../../../utils/validator/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLenght10 = maxLenghtCreator(10)

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={'Введите текст'} name="newPostText" validate={[required, maxLenght10]} />
                <button>Отправить</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'profileAddPostForm' })(addPostForm)

const Posts = React.memo((props) => {
    let postsElements = props.posts.map(post => <OnePost body={post.body} id={post.id} likesCount={post.likesCount} />)

    let addNewProfilePost = (values) => {
        props.addProfilePost(values.newPostText)
    }
    return (
        <div>
            <AddPostFormRedux onSubmit={addNewProfilePost} />
            {postsElements}
        </div>
    );
});

export default Posts;