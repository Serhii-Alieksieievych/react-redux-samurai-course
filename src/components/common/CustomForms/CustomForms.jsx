import React from "react";
import classes from "./CustomForms.module.css";

export const CustomField = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={`${classes.textareaWrapper} ${hasError && classes.error}`}>
            {props.type
                ? <Input {...input} {...props} />
                : <Textarea  {...input} {...props} />
            }
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    )
}

const Textarea = (props) => (
    <textarea {...props} className={classes.textarea}></textarea>
)

const Input = (props) => (
    <input {...props} className={classes.input}/>
)