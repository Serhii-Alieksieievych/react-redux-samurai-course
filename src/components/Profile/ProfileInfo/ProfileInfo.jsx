import React from "react";
import classes from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  const { photos, fullName, contacts } = props.profileInfo;

  return (
    <div>
      <img className={classes.avatarImg} src={photos.large} alt="ava" />
      <h2>{fullName}</h2>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      <div>
        <h3>Контакты</h3>
        <a href={contacts.twitter}>Twitter</a>
      </div>
    </div>    
  )
}

export default ProfileInfo;