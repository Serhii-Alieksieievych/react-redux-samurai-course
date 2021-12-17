import React from "react";
import classes from './Message.module.css';

const Message = (props) => {
    const { message, userId } = props;

    return (
        <div className={`${classes.message} ${userId === 0 ? classes.outer : classes.inner}`}>{message}</div>
    )
}

export default Message;