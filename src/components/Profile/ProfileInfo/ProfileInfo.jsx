import React from "react";
import classes from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import { useState } from "react";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";
import ProfileInfoText from "./ProfileInfoText/ProfileInfoText";
import AvatarBlock from "./AvatarBlock/AvatarBlock";

const ProfileInfo = ({ isOwner, profileInfo, updateProfileInfo, sendProfilePhoto, ...props}) => {
  const [inEditMode, setInEditMode] = useState(false);

  const enebleEditMode = () => {
    setInEditMode(true);
  }

  const disableEditMode = () => {
    setInEditMode(false);
  }
  
  return (
    <div className={classes.profileInfo}>
      <AvatarBlock avatarSrc={profileInfo.photos.large} sendProfilePhoto={sendProfilePhoto} isOwner={isOwner} {...props}/>
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