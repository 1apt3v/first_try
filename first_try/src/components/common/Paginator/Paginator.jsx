import React, { useState } from 'react'
import style from './Paginator.module.css'

const Paginator = ({ currentPage, totalItemsCount, onPageChanged, pageSize, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={style.paginatorContainer}>
            <div className={style.paginator}>
                <button onClick={() => { portionNumber > 1 && setPortionNumber(portionNumber - 1) }}>{"<"}</button>
            </div>
            <div className={style.listContainer}>
                <div className={style.listPages}>
                    {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                        return <div className={`${style.itemList} `} onClick={(e) => { onPageChanged(p) }}>
                            <div className={`${currentPage === p && style.selectedPage}`}>{p}</div>
                        </div>
                    })
                    }
                </div>
            </div>
            <div className={style.paginator}>
                <button onClick={() => { portionCount > portionNumber && setPortionNumber(portionNumber + 1) }}>{">"}</button>
            </div>
        </div>
    )
}
export default Paginator