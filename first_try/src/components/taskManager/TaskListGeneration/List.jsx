import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './../TaskManager.module.css'
import changeIcon from './../img/change.png'
import deleteIcon from './../img/delete.svg'

const List = ({ body, id, renameList, deleteList }) => {
    let [renameMode, setRenameMode] = useState(false)
    let [bodyLocal, setBodyLocal] = useState(body)

    const activateRenameMode = () => {
        setRenameMode(true)
    }

    const deactivateRenameMode = () => {
        setRenameMode(false)
        renameList(id, bodyLocal)
    }

    const onNameChange = (e) => {
        setBodyLocal(e.currentTarget.value)
    }

    const Buttons = ({ activateRenameMode, deleteList }) => (
        <div className={style.listButtons}>
            <button onClick={() => {
                activateRenameMode()
            }}><img src={changeIcon} alt="Изменить" /></button>
            <button onClick={() => {
                deleteList(id)
                // history.push(`/taskmanager`)
                /* Тут должен быть Redirect */
            }}><img src={deleteIcon} alt="Удалить" /></button>
        </div>
    )

    return (
        <>
            {!renameMode
                ? <div>
                    <NavLink to={"/taskmanager/" + id} className={style.listBtn} activeClassName={style.activeLink}>
                        <div>{body}</div>
                        <Buttons activateRenameMode={activateRenameMode} deleteList={deleteList} />
                    </NavLink>
                </div>
                : <NavLink to={"/taskmanager/" + id} className={style.listBtn} activeClassName={style.activeLink}>
                    <input type="text" value={bodyLocal} onChange={onNameChange} onBlur={deactivateRenameMode} autoFocus={true} />
                </NavLink>
            }
        </>


    )
}

export default List