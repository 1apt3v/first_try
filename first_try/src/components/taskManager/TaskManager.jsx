import React from 'react'
import { NavLink } from 'react-router-dom'
import TaskListGeneration from './TaskListGeneration/TastListGeneration'
import style from './TaskManager.module.css'


let tasks = [
    { id: 1, name: "Список 1" },
    { id: 2, name: "Список 2" },
    { id: 3, name: "Список 3" },
    { id: 4, name: "Список 4" }
]

const TaskManager = (props) => {

    let tasksElement = tasks.map(tasks => <TaskListGeneration tasks={tasks} />)

    return (
        <div className={style.TaskManagerPage}>
            <div className={style.TaskManagerDisplay}>
                <div className={style.taskList}>
                    <h1>Списки</h1>
                    <div className={style.list}>
                        {tasksElement}
                    </div>
                    <div className={style.newListBtn}>
                        <NavLink to={"/createtask"}>+ Новый список</NavLink>
                    </div>
                </div>
                <div className={style.tasks}>
                    <h1>Задачи</h1>
                </div>
            </div>
        </div>
    )
}

export default TaskManager