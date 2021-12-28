import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css';
import DialogReduxForm from "./DialogForm/DialogForm";

const Dialogs = ({ sendMessage, dialogs, messages}) => {
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
            <DialogReduxForm onSubmit={(data)=>{
                sendMessage(data.message)
                data.message=''
            }} />
        </div>
    )
}

export default Dialogs;