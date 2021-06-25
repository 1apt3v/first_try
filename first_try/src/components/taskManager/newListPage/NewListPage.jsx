import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './newListPage.module.css'
import { newTaskListF } from '../../../redux/store'





const NewListPage = () => {

    let newTaskListElement = React.createRef()

    let addNewTaskList = () => {
        let list = newTaskListElement.current.value
        newTaskListF(list)
    } //отсюда передаётся значение в state



    return (
        <div className={style.newTask}>
            <div className={style.newTaskWindows}>
                <h1 className={style.headling}>
                    Название нового списка
                </h1>

                <div className={style.inputList}>
                    <input id="input__inputList" type="text" ref={newTaskListElement} />
                </div>

                <div className={style.links}>
                    <div className={style.link}>
                        <NavLink to={"/taskmanager/"} id="btn__createTask" onClick={addNewTaskList}>Создать</NavLink>
                    </div>
                    <div className={style.link}>
                        <NavLink to={"/taskmanager/"} id="btn__cancel">Отменить</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewListPage