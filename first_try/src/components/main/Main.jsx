import React from "react"
import style from "./Main.module.css"
import imgGif1 from "./img/imgGif.gif"
import imgGif2 from "./img/imgGif2.gif"
import imgGif3 from "./img/imgGif3.gif"


const Main = (props) => {
    return (
        <div>
            <div id="hello">
                <div id="display">
                    <select name="" id="imgSelect" onClick={() => { document.getElementById("img").src = document.getElementById("imgSelect").value }}>
                        <option value={imgGif1}>Гифка 1</option>
                        <option value={imgGif2}>Гифка 2</option>
                        <option value={imgGif3}>Гифка 3</option>
                    </select>
                </div>
            </div>
            <div className={style.content}>
                <div id="text">
                    <p>На странице ничего нет, потому что мне лень</p>
                </div>
                <div className="break"></div>
                <div>
                    <img id="img" src={imgGif1} alt="" />
                </div>
            </div>
        </div >
    )
}




export default Main