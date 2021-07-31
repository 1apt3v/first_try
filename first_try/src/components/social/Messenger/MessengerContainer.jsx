import { connect } from 'react-redux'
import { addMessageActionCreator } from './../../../redux/messengerReducer'
import Messenger from './Messenger'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'

const mapStateToProps = (state) => {
    return {
        social: state.social,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessageText: (text) => {
            dispatch(addMessageActionCreator(text))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messenger)