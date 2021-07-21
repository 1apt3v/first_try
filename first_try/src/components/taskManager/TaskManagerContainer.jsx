import React from 'react'
import { connect } from 'react-redux'
import TaskManager from './TaskManager'

const mapStateToProps = (state) => {
    return state.taskManager
}

const mapDispatchToProps = (props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager)