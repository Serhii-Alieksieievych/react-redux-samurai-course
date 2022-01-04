import React from "react";
import classes from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import ava from "../../../img/racoon_ava.jpeg";
import { useState } from "react";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";
import ProfileInfoText from "./ProfileInfoText/ProfileInfoText";

const ProfileInfo = ({ isOwner, profileInfo, updateProfileInfo, sendProfilePhoto, ...props}) => {
  const [inEditMode, setInEditMode] = useState(false);
  const [photoInEditMode, setPhotoInEditMode] = useState(false);
  const [newPhoto, setNewPhoto] = useState(null); 

  const enebleEditMode = () => {
    setInEditMode(true);
  }

  const enebleSetPhotoEditMode = () => {
    setPhotoInEditMode(true)
  }

  const disableSetPhotoEditMode = () => {
    setPhotoInEditMode(false)
  }

  const sendNewPhoto = () => {
    sendProfilePhoto(newPhoto)
    setNewPhoto(null)
    setPhotoInEditMode(false)
  }

  const disableEditMode = () => {
    setInEditMode(false);
  }
  
  const onPhotoSelect = e => {
    e.target.files.length && setNewPhoto(e.target.files[0])//sendProfilePhoto(e.target.files[0]);
  }
  
  return (
    <div className={classes.profileInfo}>
      <div className={classes.avatarBlock}>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} isOwner={isOwner} />
        <img className={classes.avatarImg} src={profileInfo.photos.large || ava} alt="ava" />
        <div className={classes.avatarSettingBlock}>
          {!photoInEditMode
            ? <h3 className={classes.avatarSettingBlockHeader} onClick={enebleSetPhotoEditMode}>Send new photo</h3>
            : <div>
                <div>{isOwner && <input type={"file"} onChange={onPhotoSelect} />}</div>
                <button onClick={sendNewPhoto}>Send new photo</button>
              </div>}
        </div>
      </div>
      <div className={classes.profileInfoTextWrapper}>
        {inEditMode
          ? <ProfileInfoForm {...props} profileInfo={profileInfo} updateProfileInfo={updateProfileInfo} disableEditMode={disableEditMode}/>
          : <ProfileInfoText {...props} isOwner={isOwner} profileInfo={profileInfo} enebleEditMode={enebleEditMode}/>
        }
      </div>
    </div>    
  )
}

export default ProfileInfo;