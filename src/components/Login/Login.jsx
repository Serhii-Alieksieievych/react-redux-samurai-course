import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { withBackAuthRedirect } from "../../hoc/withAuthRedirect";
import { loginTC } from "../../Redux/auth-reducer";
import { requiredField } from "../../utils/validators/validator";
import { CustomField } from "../common/CustomForms/CustomForms";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form action="" className={classes.loginForm} onSubmit={handleSubmit}>
            <div name="wrapper" className={error && classes.error}>
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

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ loginTC, userId }) => {
    useEffect(() => {

    }, [userId])
   
    const onSubmit = (formData) => {
        if (!userId) loginTC(formData).then(() => { })
    }
    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    userId: state.auth.id,
})
export default compose(withBackAuthRedirect, connect(mapStateToProps, { loginTC }))(Login);