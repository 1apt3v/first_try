import React from 'react'

const TasksGeneration = (props) => {
    
    const tasksElement = props.taskManager.tasks.map(task => <Tasks body={task.body} id={task.id} key={task.id} />)
    
    return (
        <div>
            {tasksElement}
        </div>
    )
}


const Tasks = ({ body, id }) => {
    return (
        <div>
            {body}
        </div>
    )
}

export default TasksGeneration
