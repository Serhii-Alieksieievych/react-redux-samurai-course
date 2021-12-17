import React, { useRef } from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css';
import { changeNewMessageActionCreator, sendMessageActionCreator } from "../../Redux/dialogs-reducer";

const Dialogs = ({ dialogsState, messagesArr, dispatch }) => {

    const messageArea = useRef('')

    const sendMessageHandler = (e) =>{
        e.preventDefault();
        dispatch(sendMessageActionCreator());
        dispatch(changeNewMessageActionCreator(''));
        messageArea.current.value = '';
    }

    const changeMessageHandler = () => {
        dispatch(changeNewMessageActionCreator(messageArea.current.value))
        messageArea.current.value = dialogsState.currentMessage;
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsState.dialogsArr.map(dialog=>{
                    const {id, name} = dialog;
                    return <DialogItem id={id} key={id} name={name}/>
                })}
            </div>
            <div className={classes.messages}>
                {messagesArr.map(message => <Message
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