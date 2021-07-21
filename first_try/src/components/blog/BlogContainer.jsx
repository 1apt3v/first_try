import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Blog from './Blog'


const mapStateToProps = (state) => {
    return {
        blogPage: state.blogPage
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        // addPost: (newPostText) => {
        //     dispatch(addPostActionCreator(newPostText))
        // }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Blog)