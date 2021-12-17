import React from "react";
import { Link } from "react-router-dom";
import classes from './DialogItem.module.css';


const DialogItem = (props) => {
    const { name, id } = props;
    const path = '/dialogs/' + id;
    return (
        <div className={classes.dialogItem}>
            <Link className={classes.dialogLink} to={path}>
                {name}
            </Link>
        </div>
    )
}

export default DialogItem;