import React from 'react';
import { Formik, FormikErrors, FormikValues } from 'formik';

import { useFormik } from "formik";

interface Values {
    day?: string
    month?: string
    year?: string
}

const FiltrationForm :React.FC<any> = ({getMessagesNewestThan, currentDialog}) => {
    const validate = (values: Values) => {
        const errors : FormikErrors<Values> = {};
        if (!values.year) {
            errors.year = 'Required';
        } else if (values.year.length !== 4) {
            errors.year = 'Must be 4 characters';
        }
        if (!values.month) {
            errors.month = 'Required';
        }
        if (!values.day) {
            errors.day = 'Required';
        }
        return errors;
    }
    
    const formik = useFormik({
        initialValues: {
        year: '',
        month: '',
        day: ''
    },
    validate,
    onSubmit: (values: Values) => {
        const fullDate = `${values.year}-${values.month}-${values.day}`
        getMessagesNewestThan(currentDialog.id, fullDate)
        formik.setSubmitting(false)
    },
})
    const monthes = []
    for (let i = 1 ; i < 13; i++){
        monthes.push(i)
    }
    const days = []
    for (let i = 1; i < 32; i++) {
        days.push(i)
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <h3>Get only messages newest than..</h3>
            <input
                type="input"
                {...formik.getFieldProps('year')}
            />
            {formik.touched.year && formik.errors.year ? <div>{formik.errors.year}</div> : null}
            
            <select
                {...formik.getFieldProps('month')}
            >
                <option selected>Month</option>
                {monthes.map(month => <option value={`${month}`}>{month}</option>)}
            </select>
            {formik.touched.month && formik.errors.month ? <div>{formik.errors.month}</div> : null}

            <select
                {...formik.getFieldProps('day')}
            >
                <option selected>Day</option>
                {days.map(day => <option value={`${day}`}>{day}</option>)}
            </select>
            {formik.touched.day && formik.errors.day ? <div>{formik.errors.day}</div> : null}
            <button type="submit" disabled={formik.isSubmitting}>
                Get
            </button>
        </form>
    )}



export default FiltrationForm;