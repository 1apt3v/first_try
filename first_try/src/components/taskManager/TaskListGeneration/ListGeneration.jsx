import React from 'react'
import List from './List'

const TaskListGeneration = (props) => {
    
    let listElement = props.lists.map(list => <List lists={list} key={list.id} />)
    return (
        <div>
            {listElement}
        </div>
        )
}

export default TaskListGeneration