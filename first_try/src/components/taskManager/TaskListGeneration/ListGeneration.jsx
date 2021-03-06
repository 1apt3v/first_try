import React from 'react'
import List from './List'

const TaskListGeneration = (props) => {
    let listElement = props.lists.map(list => <List renameList={props.renameList} deleteList={props.deleteList} body={list.body} key={list.id} id={list.id} />)
    return (
        <div>
            {listElement}
        </div>
        )
}

export default TaskListGeneration