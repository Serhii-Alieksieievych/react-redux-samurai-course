import React from "react";
import classes from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import { useState } from "react";
import ProfileInfoForm from "./ProfileInfoForm/ProfileInfoForm";
import ProfileInfoText from "./ProfileInfoText/ProfileInfoText";
import AvatarBlock from "./AvatarBlock/AvatarBlock";
import Preloader from "../../common/Preloader/Preloader";

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
      <div className={classes.avatarBlockWrapper}>
        {!profileInfo.isFetching
          ? <AvatarBlock
              avatarSrc={profileInfo.data.photos.large}
              sendProfilePhoto={sendProfilePhoto}
              isOwner={isOwner}
              {...props}
            />
          : <Preloader/>
        }
      </div>
      <div className={classes.profileInfoTextWrapper}>
        {profileInfo.isFetching
          ? <Preloader />
          : inEditMode
            ? <ProfileInfoForm
                {...props}
                profileInfo={profileInfo}
                updateProfileInfo={updateProfileInfo}
                disableEditMode={disableEditMode}
              />
            : <div className={classes.profileInfoText}><ProfileInfoText
                {...props}
                isOwner={isOwner}
                profileInfo={profileInfo}
                enebleEditMode={enebleEditMode}
            /></div>
        }
      </div>
    </div>    
  )
}

export default ProfileInfo;