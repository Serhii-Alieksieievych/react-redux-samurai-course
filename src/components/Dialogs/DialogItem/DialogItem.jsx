import React from "react";
import { Link } from "react-router-dom";
import { refreshMessages } from "../../../Redux/dialogs-reducer";
import classes from './DialogItem.module.css';
import smallAva from '../../../assets/img/avatars/small_ava.jpg'


const DialogItem = ({dialog, refreshMessages}) => {
    const clickHandler = () => {
        refreshMessages(dialog)
    }
    //const path = '/dialogs/' + dialog.id;
    return (
        <div className={classes.dialogItem} onClick={clickHandler}>
            {//<Link className={classes.dialogLink} to={path}>
                dialog.userName
            /*</Link>*/}
            <div>New messages: {dialog.newMessagesCount}</div>
            <img src={dialog.photos.small || smallAva}/>
        </div>
    )
}

export default DialogItem;