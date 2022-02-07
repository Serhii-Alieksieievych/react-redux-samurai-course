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
            <img src={dialog.photos.small || smallAva} className={classes.avatar}/>
            <div className={classes.stringes}>
                {//<Link className={classes.dialogLink} to={path}>
                    <h3>
                        {dialog.userName}
                    </h3>
                /*</Link>*/}
                <div>New messages: {dialog.newMessagesCount}</div>
            </div>
        </div>
    )
}

export default DialogItem;