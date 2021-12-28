import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { AuthAPI } from "../../api/api";
import { withBackAuthRedirect } from "../../hoc/withAuthRedirect";
import { loginTC } from "../../Redux/auth-reducer";
import { requiredField } from "../../utils/validators/validator";
import { CustomField, Input } from "../common/CustomForms/CustomForms";
import classes from "./Login.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form action="" className={classes.loginForm} onSubmit={handleSubmit}>
            <div name="wrapper" className={error&&classes.error}>
                <Field
                    component={CustomField}
                    validate={[requiredField]}
                    name="input"
                    type="text"
                    placeholder="login"
                    className={classes.input}
                />
                <Field
                    component={CustomField}
                    validate={[requiredField]}
                    name="password"
                    type="password"
                    placeholder="password"
                    className={classes.input}
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
)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({loginTC}) => {
    const onSubmit = (formData) => {
        loginTC(formData)
    }
    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default compose(connect(null, { loginTC }),withBackAuthRedirect) (Login);