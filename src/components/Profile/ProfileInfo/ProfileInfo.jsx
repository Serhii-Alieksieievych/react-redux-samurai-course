import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  const { imgSrc } = props;
    return (
      <div>
        <img className={classes.avatarImg} src={imgSrc} alt="ava" />
        <div>Description</div>
      </div>    
    )
}

export default ProfileInfo;