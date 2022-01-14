import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from './ProfileStatus.module.css';

const ProfileStatus = ({status, updateStatus, isOwner}) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);
  useEffect(() => {
    setLocalStatus(status)
  }, [status])
  

  const activateEditMode = () => {
    isOwner && setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    updateStatus(localStatus)
  }

  return (
      <div className={classes.wrapper}>
        {!editMode
        ? <div>
          <span onDoubleClick={activateEditMode}>
            {status ? status : isOwner ? "Set your status" : "This guy hasn't status now"}
          </span>
        </div>
        : <div>
          <input
            autoFocus
            type="text"
            value={localStatus}
            onBlur={deactivateEditMode}
            onChange={(e) => {
              setLocalStatus(e.target.value)
            }}
          />
        </div>
        }
      </div>
  )
}

export default ProfileStatus;