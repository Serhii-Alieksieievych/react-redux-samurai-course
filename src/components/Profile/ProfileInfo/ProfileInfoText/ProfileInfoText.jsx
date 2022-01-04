import React from "react";
import classes from './ProfileInfoText.module.css';
import EditButton from "../../../common/EditButton/EditButton";

const ProfileInfoText = ({ profileInfo, isOwner, enebleEditMode }) => {
  const {
    fullName,
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription
  } = profileInfo;

  if (!profileInfo) return <div> Loading... </div>
  return (
    <div className={classes.profileInfoText}>
      {isOwner && <div className={classes.editButton} onClick={enebleEditMode}><EditButton /></div>}
      <h1>{fullName}</h1>
      <p>About me: {aboutMe}</p>
      <div>Looking for a job: {lookingForAJob ? <span>Yes</span> : <span>No</span>}</div>
      {lookingForAJob && <div>Profession skills:{lookingForAJobDescription} </div>}
      <div className={classes.linksWrapper}>
        <h3>Контакты</h3>
        <a href={contacts.github}>Github</a>
        <a href={contacts.facebook}>Facebook</a>
        <a href={contacts.instagram}>Instagram</a>
        <a href={contacts.twitter}>Twitter</a>
        <a href={contacts.website}>website</a>
        <a href={contacts.youtube}>Youtube</a>
        <a href={contacts.mainLink}>MainLink</a>
      </div>
    </div>
  )
}

export default ProfileInfoText;