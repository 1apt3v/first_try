import React, { useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import ListGeneration from './TaskListGeneration/ListGeneration'
import style from './TaskManager.module.css'
import svgPlus from './img/plus.svg'
import changeIcon from './img/change.png'
import deleteIcon from './img/delete.svg'
// import { getTasks } from '../../redux/taskManagerReducer'




const TaskManager = (props) => {
    let listsElement = <ListGeneration lists={props.lists} />

    return (
        <div className={style.TaskManagerPage}>
            <div className={style.TaskManagerDisplay}>
                <TaskManagerLists listsElement={listsElement} />
                <div className={style.tasks}>
                    <h1>Задачи</h1>
                    <Route path={"/taskmanager/:id"} render={() => <TaskManagerTasks renameTask={props.renameTask} deleteTask={props.deleteTask} tasks={props.tasks} direction={props.direction} setNewTask={props.setNewTask} id={props.match.params.id} />} />
                </div>

            </div>
        </div>
    )
}


const TaskManagerLists = ({ listsElement }) => {
    return (
        <div className={style.taskList}>
            <h1>Списки</h1>
            <div className={style.list}>
                {listsElement}
            </div>
            <div className={style.btnNewList}>
                <div className={style.newListBtn}>
                    <NavLink to={"/createlist"}>
                        + Новый список
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

const Task = ({ idList, idTask, body, renameTask, deleteTask }) => {
    let [renameMode, setRenameMode] = useState(false)
    let [bodyLocal, setBodyLocal] = useState(body)

    const activateRenameMode = () => {
        setRenameMode(true)
    }

    const deactivateRenameMode = () => {
        setRenameMode(false)
        renameTask(idList, idTask, bodyLocal)
    }

    const onNameChange = (e) => {
        setBodyLocal(e.currentTarget.value)
    }

    return (
        <div className={style.task} id={idTask}>
            {!renameMode
                ? <div>{bodyLocal}</div>
                : <div><input type="text" value={bodyLocal} onChange={onNameChange} onBlur={deactivateRenameMode} autoFocus={true} /></div>
            }
            <div className={style.taskButtons}>
                <button onClick={() => {
                    activateRenameMode()
                }}><img src={changeIcon} alt="Изменить" /></button>
                <button onClick={() => { deleteTask(idTask, idList) }}><img src={deleteIcon} alt="Удалить" /></button>
            </div>

        </div>
    )
}



const TaskManagerTasks = (props) => {
    let newTaskElement = React.createRef()

    let [addMode, setAddMode] = useState(false)

    let addNewTask = () => {
        let name = newTaskElement.current.value
        props.setNewTask(props.id, name)
    }

    const getTasks = (id) => {
        const tasks = props.direction[id].map(id => {
            return props.tasks.find(task => task.id === id)
        })
        return tasks
    }

    let taskElement = getTasks(props.id).map(task => {
        return <Task renameTask={props.renameTask} deleteTask={props.deleteTask} idList={props.id} idTask={task.id} body={task.body} key={task.id} />
    })

    return (
        <div>
            <div className={style.listTasks}>
                {taskElement}
            </div>
            <div className={style.btnNewTask}>
                <div className={style.newTaskBtn}>

                    {!addMode
                        ? <img className={style.newTaskBtn} src={svgPlus} alt="plus" onClick={() => setAddMode(true)} />
                        : <div>
                            <input type="text" ref={newTaskElement} autoFocus={true} />
                            <button onClick={() => {
                                addNewTask()
                                setAddMode(false)
                            }}>Отправить</button>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default TaskManager