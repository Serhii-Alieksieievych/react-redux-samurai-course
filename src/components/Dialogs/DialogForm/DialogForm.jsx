import React from "react";
import { reduxForm, Field } from "redux-form";
import { CustomField } from "../../common/CustomForms/CustomForms";
import classes from '../Dialogs.module.css';
import { maxLengthCreator, requiredField } from "../../../utils/validators/validator";

const maxLengthValidate = maxLengthCreator(30);

const DialogForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Field component={CustomField} placeholder="message" name="message" validate={[maxLengthValidate]}/>
            <button>Відправити повідомлення</button>
        </form>
    )
}

const DialogReduxForm = reduxForm({ form: 'dialog'})(DialogForm)

export default DialogReduxForm