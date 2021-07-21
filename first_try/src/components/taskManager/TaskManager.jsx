import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import ListGeneration from './TaskListGeneration/ListGeneration'
import style from './TaskManager.module.css'
import svgPlus from './img/plus.svg'
import TasksGeneration from './Tasks/TasksGeneration'



const TaskManager = (props) => {
    debugger
    let listsElement = <ListGeneration lists={props.lists} />
    // let tasksElement = props.taskManager.tasks.map(tasks => <Tasks tasks={tasks} />)
    
    // idList={idList}
    let tasksElement = <TasksGeneration taskManager={props} />
    

    return (
        <div className={style.TaskManagerPage}>
            <div className={style.TaskManagerDisplay}>
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
                <div className={style.tasks}>
                    <h1>Задачи</h1>
                    <div className={style.listTasks}>
                        {tasksElement}
                    </div>
                    <div className={style.btnNewTask}>
                        <div className={style.newTaskBtn}>
                            <NavLink to={"/createtask"}>
                                <img src={svgPlus} alt="plus" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskManager