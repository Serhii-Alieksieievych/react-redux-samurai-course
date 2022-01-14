import React from "react";
import classes from './AvatarBlock.module.css';
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ava from "../../../../img/racoon_ava.jpeg";
import { useState } from "react";
import CloseButton from "../../../common/CloseButton/CloseButton";

const AvatarBlock= ({ isOwner, avatarSrc, sendProfilePhoto, ...props}) => {
  const [photoInEditMode, setPhotoInEditMode] = useState(false);
  const [newPhoto, setNewPhoto] = useState(null); 

  const enebleSetPhotoEditMode = () => {
    setPhotoInEditMode(true)
  }

  const disableSetPhotoEditMode = () => {
    setNewPhoto(null)
    setPhotoInEditMode(false)
  }

  const sendNewPhoto = () => {
    sendProfilePhoto(newPhoto)
    setNewPhoto(null)
    setPhotoInEditMode(false)
  }

  
  const onPhotoSelect = e => {
    e.target.files.length && setNewPhoto(e.target.files[0])//sendProfilePhoto(e.target.files[0]);
  }
  
  return (
    <div className={classes.avatarBlock}>
      {<ProfileStatus
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={isOwner}
      />}
      <img
        className={classes.avatarImg}
        src={avatarSrc|| ava}
        alt="ava"
      />
      {isOwner && <div className={classes.avatarSettingBlock}>
        {!photoInEditMode
          ? <div
              className={classes.avatarSettingBlockHeader}
              onClick={enebleSetPhotoEditMode}
            >
              Set new photo
            </div>
          : <div>
              <input
                type={"file"}
                onChange={onPhotoSelect}
                className={classes.newAvatarInput}
              />
              <button
                onClick={sendNewPhoto}
                className={classes.newAvatarSendButton}
                disabled={!newPhoto}
              >
                Set new photo
              </button>
              <div
                className={classes.closeButton}
                onClick={disableSetPhotoEditMode}
              >
                <CloseButton size="30px" />
              </div>
            </div>}
      </div>}
    </div>  
  )
}

export default AvatarBlock;