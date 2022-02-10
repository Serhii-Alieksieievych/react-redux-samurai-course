import React from "react";
import CloseButton from "../../common/CloseButton/CloseButton";
import classes from './RestoreProposition.module.css';

const RestoreProposition = ({ restoreMessage, dialogInDeletingProgressId, currentDialog}) => {
    const restoreHandler = () => {
        restoreMessage(dialogInDeletingProgressId, currentDialog)
    }

    return (
        <div>
            You can restore message
            TIME
            <button onClick={restoreHandler}>Restore</button>
        </div>
    )
}

export default RestoreProposition;