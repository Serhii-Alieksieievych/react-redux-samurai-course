import React, { useEffect } from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css';
import DialogReduxForm from "./DialogForm/DialogForm";

const Dialogs = ({
    sendMessage,
    dialogs,
    messages,
    refreshDialogs,
    refreshMessages,
    currentDialog
}) => {
    useEffect(() => {
        refreshDialogs()
    }, [])
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogs.map(dialog=>{
                    return <DialogItem key={dialog.id} dialog={dialog} refreshMessages={refreshMessages}/>
                })}
            </div>
            <div className={classes.messages}>
                <img src={currentDialog.photos.small && currentDialog.photos.small} alt="avatar"/>
                <h3>Name: {currentDialog.userName}</h3>
                <p>Last user's activity date: {currentDialog.lastUserActivityDate}</p>
                {messages.items.map(message => <Message
                    key={message.id}
                    message={message}
                />)}
            </div>
            <DialogReduxForm onSubmit={(data)=>{
                sendMessage([currentDialog, data.message])
                data.message=''
            }} />
        </div>
    )
}

export default Dialogs;