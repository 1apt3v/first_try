import React from 'react'
import preloader from './../../../assets/images/loading.gif'

const Preloader = (props) => {
    return <img style={{ width: '50px', height: '50px' }} src={preloader} alt="Загрузка..." />
}

export default Preloader