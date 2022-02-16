import React from 'react';
import { Formik, Field, Form, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';
import { DialogType } from '../../../types/DialogsTypes';

type PropsType = {
    sendMessage: (payload:[DialogType, string])=> void,
    currentDialog: DialogType
}
const DialogForm = ({sendMessage, currentDialog}: PropsType) => {
    return (
        <Formik
            initialValues={{ message: ''}}
            validationSchema={Yup.object({
                message: Yup.string()
                    .max(300, 'Must be 300 characters or less')
            })}
            onSubmit={(values, { setSubmitting },) => {
                sendMessage([currentDialog,values.message])
                values.message=''
                setSubmitting(false)
            }}
        >
            <Form>
                <Field name="message" as="textarea" />
                <ErrorMessage name="message" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default DialogForm