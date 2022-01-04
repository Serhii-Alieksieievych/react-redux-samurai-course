import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
//import { Field, reduxForm } from "redux-form"; //remove
import { Form, Field } from 'react-final-form'
import { withBackAuthRedirect } from "../../hoc/withAuthRedirect";
import { loginTC } from "../../Redux/auth-reducer";
import { requiredField } from "../../utils/validators/validator";
import { CustomField } from "../common/CustomForms/CustomForms";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            validate={requiredField}
        >
            {({ handleSubmit, error })=>(
                <form action="" className={classes.loginForm} onSubmit={handleSubmit}>
                    <div name="wrapper" className={error && classes.error}>
                        <Field
                            component={CustomField}
                            validate={requiredField}
                            name="input"
                            type="text"
                            placeholder="login"
                        />
                        <Field
                            component={CustomField}
                            validate={requiredField}
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                        <div>
                            <Field
                                component="input"
                                name="rememberMe"
                                type="checkbox"
                            />
                            <span>
                                Запомнить меня
                            </span>
                        </div>
                        <button>Log in</button>
                        <div className={classes.errorMessage}>{error}</div>
                    </div>
                </form>
            )}
        </Form>
    )
}

//const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ loginTC, userId, hadErr }) => {
    const[errorMessage, setErrorMessage] = useState('')

   console.log('render')
    const onSubmit = (formData) => {
        setErrorMessage('')
        if (!userId)loginTC(formData).then(
            err => {
                setErrorMessage(err)
            }
        )
    }
    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
            {hadErr && <h2>{errorMessage}</h2>}
        </div>
    )
}
const mapStateToProps = (state) => ({
    userId: state.auth.id,
    hadErr: state.auth.hadErr,
})
export default compose(withBackAuthRedirect, connect(mapStateToProps, { loginTC }))(Login);