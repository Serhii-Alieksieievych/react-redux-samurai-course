import React from "react";
import { Link } from "react-router-dom";
import classes from './CurrentDialogInfo.module.css';
import smallAva from '../../../assets/img/avatars/small_ava.jpg'

type CurrentDialogInfoType = {
    currentDialog: any,
}

const CurrentDialogInfo: React.FC<CurrentDialogInfoType> = ({
    currentDialog
}) => {
    const path = `../profile/${currentDialog.id}`
    return <div className={classes.currentDialogInfo}>
        {<Link to={path}>
        <img src={currentDialog.photos.small || smallAva} alt="avatar" className={classes.avatar} />
    </Link>}
    <div className={classes.textInfo}>
        <h3 className={classes.userName}>Name: {currentDialog.userName}</h3>
        <p className={classes.lastActivity}>Last user's activity date: {currentDialog.lastUserActivityDate}</p>
    </div>
    </div>
}    


export default CurrentDialogInfo;