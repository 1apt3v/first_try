import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { setNewTask, deleteTask, renameTask } from '../../redux/taskManagerReducer'
import TaskManager from './TaskManager'

class TaskManagerContainer extends React.Component {
    render() {
        return (
            <div>
                <TaskManager {...this.props} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return state.taskManager
}




export default compose(withRouter, connect(mapStateToProps, {setNewTask, renameTask, deleteTask}))(TaskManagerContainer)