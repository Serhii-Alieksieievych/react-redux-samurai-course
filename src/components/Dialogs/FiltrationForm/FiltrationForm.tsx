import React from 'react';
import { Formik } from 'formik';

const FiltrationForm :React.FC<any> = ({getMessagesNewestThan, currentDialog}) => (
    <div>
        <h3>Get only messages newest than..</h3>
        <Formik
            initialValues={{
                year: '',
                month: '',
                day: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
                const fullDate = `${values.year}-${values.month}-${values.day}`
                getMessagesNewestThan(currentDialog.id, fullDate)
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <input
                        type="input"
                        name="year"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.year}
                    />
                    <input
                        type="input"
                        name="month"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.month}
                    />
                    <input
                        type="input"
                        name="day"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.day}
                    />
                    {errors.day && touched.day && errors.day}

                    <button type="submit" disabled={isSubmitting}>
                        Get
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default FiltrationForm;