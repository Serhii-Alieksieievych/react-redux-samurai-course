import React from "react";
import CloseButton from "../../common/CloseButton/CloseButton";
import classes from './Message.module.css';

const Message = ({message, deleteMessage, currentDialog, setMessageToSpam}) => {
    const deleteHandler = () => {
        deleteMessage(message.id, currentDialog)
    }
    const setToSpamHandler = () => {
        setMessageToSpam(message.id, currentDialog)
    }
    return (
        <div
            className={ message &&
                `${classes.message} ${message.userId ? classes.myMessage : classes.notMyMessage}`
            }
        >
                Текст: {message.body}<br />
                Відправлено: {message.addedAt}
                <button onClick={deleteHandler}>Delete</button>
                <button onClick={setToSpamHandler}>To spam</button>
        </div>
    )
}

export default Message;