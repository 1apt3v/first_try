import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './../newListPage/newListPage.module.css'


const NewTaskPage = (props) => {

    let newTaskElement = React.createRef()

    let addNewTask = () => {
        let name = newTaskElement.current.value
        // props.setNewList(name)
    } //отсюда передаётся значение в state


    return (
        <div className={style.newTask}>
            <div className={style.newTaskWindows}>
                <h1 className={style.headling}>
                    Название новой задачи
                </h1>

                <div className={style.inputList}>
                    <input id="input__inputList" type="text" ref={newTaskElement} />
                </div>

                <div className={style.links}>
                    <div className={style.link}>
                        <NavLink to={"/taskmanager/"} id="btn__create" onClick={addNewTask}>Создать</NavLink>
                    </div>
                    <div className={style.link}>
                        <NavLink to={"/taskmanager/"} id="btn__cancel">Отменить</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewTaskPage