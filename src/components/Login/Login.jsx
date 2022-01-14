import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Form, Field } from 'react-final-form'
import { withBackAuthRedirect } from "../../hoc/withAuthRedirect";
import { loginTC } from "../../Redux/auth-reducer";
import { requiredField } from "../../utils/validators/validator";
import { CustomField } from "../common/CustomForms/CustomForms";
import classes from "./Login.module.css";
import { useState } from "react";

const LoginForm = (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            validate={requiredField}
        >
            {({ handleSubmit, error, values })=>(
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
                        {props.captchaUrl
                            && <div>
                                <img src={props.captchaUrl} alt="captcha" />
                                <Field
                                    component={CustomField}
                                    name="captcha"
                                    type="text"
                                    placeholder="captcha"
                                />
                            </div>}
                        <button>Log in</button>
                        <div className={classes.errorMessage}>{error}</div>
                    </div>
                    <pre>{JSON.stringify(values)}</pre>
                </form>
            )}
        </Form>
    )
}

//const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = ({ loginTC, userId, hadErr, captchaUrl }) => {
    const[errorMessage, setErrorMessage] = useState('')

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
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
            {hadErr && <h2>{errorMessage}</h2>}
        </div>
    )
}
const mapStateToProps = (state) => ({
    userId: state.auth.id,
    hadErr: state.auth.hadErr,
    captchaUrl: state.auth.captchaUrl,
})
export default compose(withBackAuthRedirect, connect(mapStateToProps, { loginTC }))(Login);