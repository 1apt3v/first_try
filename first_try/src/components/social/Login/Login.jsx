import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { required } from '../../../utils/validator/validators'
import { createField, Input } from '../../common/FormsControls/FormsControls'
import { login } from './../../../redux/authReducer'
import { Redirect } from 'react-router'
import style from './../../common/FormsControls/FormsControls.module.css'


const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "Запомнить меня")}
            <div className={style.formSummeryError}>
                {error}
            </div>
            <div><button>Войти</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/social/profile"} />
    }

    return (
        <div>
            <h1>Логин</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)