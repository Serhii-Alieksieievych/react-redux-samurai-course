import React from "react";
import { connect } from "react-redux";
import { compose, StateFromReducersMapObject } from "redux";
import { withBackAuthRedirect } from "../../hoc/withAuthRedirect";
import { loginTC } from "../../Redux/auth-reducer";
import { CustomField } from "../common/CustomForms/CustomForms";
import classes from "./Login.module.css";
import { useState } from "react";

//import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import { useFormik } from 'formik';
import { AuthFormDataType } from "../../types/AuthTypes";
import { AppStateType } from "../../Redux/redux-store";

interface OtherProps {
    userId: number,
    hadErr: boolean,
    captchaUrl: string,
    loginTC: (formData: AuthFormDataType) => Promise<any>,
}


const validate = (values: AuthFormDataType) => {
    const errors:FormikErrors<AuthFormDataType> = {};
    if (!values.input) {
        errors.input = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    return errors;
};



const Login = (props:FormikProps<AuthFormDataType> & OtherProps) => {
    const formik = useFormik({
        initialValues: {
            input: '',
            password: '',
            rememberMe: false,
            captcha: null,
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            props.loginTC(values)
        },
    });

    return (
        <div className={classes.login}>
            <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
                <div className={formik.errors && classes.error}>
                    <label htmlFor="login">Login</label>
                    <input
                        id="input"
                        type="text"
                        {...formik.getFieldProps('input')}
                    />
                    {formik.touched.input && formik.errors.input ? (
                        <div>{formik.errors.input}</div>
                    ) : null}
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                    <label htmlFor="rememberMe">Remember me</label>
                    <input
                        id="rememberMe"
                        type="checkbox"
                        {...formik.getFieldProps('rememberMe')}
                    />
                    {props.captchaUrl
                        && <div>
                            <img src={props.captchaUrl} alt="captcha" />
                            <input
                                id="captcha"
                                type="text"
                                {...formik.getFieldProps('captcha')}
                            />
                        </div>
                    }
                    {formik.touched.captcha && formik.errors.captcha ? (
                        <div>{formik.errors.captcha}</div>
                    ) : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
const mapStateToProps = (state: AppStateType) => ({
    userId: state.auth.id,
    hadErr: state.auth.hadErr,
    captchaUrl: state.auth.captchaUrl,
})
export default compose(withBackAuthRedirect, connect(mapStateToProps, { loginTC }))(Login);