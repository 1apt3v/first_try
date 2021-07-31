import { connect } from 'react-redux'
import { compose } from 'redux'
import Blog from './Blog'


const mapStateToProps = (state) => {
    return {
        blogPage: state.blogPage
    }
}

export default compose(
    connect(mapStateToProps, {})
)(Blog)