import React from 'react'
import { Route } from 'react-router-dom'
import Task from './Task'

const Tasks = (props) => {
    const tasks = props.direction.map(idTask => props.tasks[idTask].taskName)

    return (
        <div></div>
    )
}

export default Tasks

