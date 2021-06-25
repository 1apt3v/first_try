import React from 'react'
import Tasks from './Tasks'

const TasksGeneration = (props) => {
    // debugger
    props.taskManager.direction.map(direction => 
        <Tasks direction={direction} tasks={props.taskManager.tasks} lists={props.taskManager.lists} key={direction.id} />
    )

    return (
        <div>
            {/* <Route path={"/taskmanager/" + 0} render={() => <Task tasks={tasks} />} /> */}
        </div>
    )
}

export default TasksGeneration
