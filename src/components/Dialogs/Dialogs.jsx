import React, { useRef } from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css';

const Dialogs = ({ sendMessage, changeMessage, dialogs, messages }) => {

    const messageArea = useRef('')

    const sendMessageHandler = (e) =>{
        e.preventDefault();
        sendMessage()
        messageArea.current.value = '';
    }

    const changeMessageHandler = () => {
        const text = messageArea.current.value
        changeMessage(text)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs.map(dialog=>{
                    const {id, name} = dialog;
                    return <DialogItem id={id} key={id} name={name}/>
                })}
            </div>
            <div className={classes.messages}>
                {messages.map(message => <Message
                    key={message.id}
                    id={message.id}
                    message={message.message}
                    userId={message.userId}
                />)}
            </div>
            <form onSubmit={sendMessageHandler} className={classes.form}>
                <textarea ref={messageArea} onChange={changeMessageHandler}/>
                <button>Відправити повідомлення</button>
            </form>
        </div>
    )
}

export default Dialogs;