import React from "react";
import classes from './Message.module.css';

const Message = ({message}) => {
    return (
        <div
            className={
                `${classes.message} ${message.userId ? classes.myMessage : classes.notMyMessage}`
            }
        >
            Текст: {message.body}<br/>
            Відправлено: {message.addedAt}
        </div>
    )
}

export default Message;