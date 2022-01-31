import React from "react";
import classes from "./CustomForms.module.css";

export const CustomField = ({ input, meta, ...props } :any) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={`${classes.textareaWrapper} ${hasError && classes.error}`}>
            {input.type
                ? <Input {...input} {...props} />
                : <Textarea  {...input} {...props} />
            }
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    )
}

const Textarea = (props :any) => (
    <textarea {...props} className={classes.textarea}></textarea>
)

const Input = (props :any) => (
    <input {...props} className={classes.input}/>
)