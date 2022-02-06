import React from "react";
import CloseButton from "../../common/CloseButton/CloseButton";
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
            <button>Delete</button>
            <button>To spam</button>
        </div>
    )
}

export default Message;