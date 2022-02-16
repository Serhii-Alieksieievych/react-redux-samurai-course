import React from "react";
import classes from './ProfileInfoText.module.css';
import EditButton from "../../../common/EditButton/EditButton";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfoText = ({ profileInfo, isOwner, enebleEditMode }) => {
  const {
    fullName,
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription
  } = profileInfo.data;

  const {
    github,
    facebook,
    instagram,
    twitter,
    website,
    youtube,
    mainLink
  } = contacts;
  
  return (
    <div className={classes.profileInfoText}>
      {isOwner && <div className={classes.editButton} onClick={enebleEditMode}><EditButton /></div>}
      <h1>{fullName}</h1>
      <p>About me: {aboutMe}</p>
      <div>Looking for a job: {lookingForAJob ? <span>Yes</span> : <span>No</span>}</div>
      {lookingForAJob && <div>Profession skills:{lookingForAJobDescription} </div>}
      <div className={classes.linksWrapper}>
        <h3>Контакты</h3>
        {github && <a href={github}>Github</a>}
        {facebook && <a href={facebook}>Facebook</a>}
        {instagram && <a href={instagram}>Instagram</a>}
        {twitter && <a href={twitter}>Twitter</a>}
        {website && <a href={website}>website</a>}
        {youtube && <a href={youtube}>Youtube</a>}
        {mainLink && <a href={mainLink}>MainLink</a>}
      </div>
    </div>
  )
}

export default ProfileInfoText;