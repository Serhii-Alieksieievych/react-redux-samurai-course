import React, { useEffect } from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import classes from './Dialogs.module.css';
import DialogReduxForm from "./DialogForm/DialogForm";
import CurrentDialogInfo from "./CurrentDialogInfo/CurrentDialogInfo";
import RestoreProposition from "./RestoreProposition/RestoreProposition"
import FiltrationForm from "./FiltrationForm/FiltrationForm";

const Dialogs = ({
    sendMessage,
    dialogs,
    messages,
    refreshDialogs,
    refreshMessages,
    currentDialog,
    deleteMessage,
    setMessageToSpam,
    dialogInDeletingProgressId,
    restoreMessage,
    newMessagesCount,
    getMessagesNewestThan
}) => {
    useEffect(() => {
        refreshDialogs()
    }, [])
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsLists}>
                <div className={classes.dialogsItems}>
                    <h3>You have {newMessagesCount} new messages!</h3>
                    {dialogs.map(dialog => {
                        return <DialogItem
                            key={dialog.id}
                            dialog={dialog}
                            refreshMessages={refreshMessages}
                        />
                    })}
                </div>
                <div className={classes.messages}>
                    {currentDialog && <CurrentDialogInfo currentDialog={currentDialog} />}
                    {currentDialog
                        && <FiltrationForm
                            getMessagesNewestThan={getMessagesNewestThan}
                            currentDialog={currentDialog}
                        />}
                    {dialogInDeletingProgressId
                        && <RestoreProposition
                            restoreMessage={restoreMessage}
                            dialogInDeletingProgressId={dialogInDeletingProgressId}
                            currentDialog={currentDialog}
                        />}
                    {messages.items.map(message => <Message
                        key={message.id}
                        message={message}
                        deleteMessage={deleteMessage}
                        currentDialog={currentDialog}
                        setMessageToSpam={setMessageToSpam}
                    />)}
                </div>
            </div>
            <DialogReduxForm className={classes.dialogsForm} onSubmit={(data)=>{
                sendMessage([currentDialog, data.message])
                data.message=''
            }} />
        </div>
    )
}

export default Dialogs;