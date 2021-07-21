import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addProfilePostAC } from '../../../redux/profileReducer';
import Posts from './Posts';


class PostsContainer extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <Posts {...this.props} />

        )
    }
}

let mapStateToProps = (state) => ({
    posts: state.profile.posts
})

const mapDispatchToProps = (dispatch) => {
    return {
        addProfilePost: (text) => {
            dispatch(addProfilePostAC(text))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(PostsContainer)
