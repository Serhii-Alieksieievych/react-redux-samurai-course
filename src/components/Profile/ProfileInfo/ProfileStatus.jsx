import React from "react";
import { useState } from "react";
import classes from './ProfileInfo.module.css';

const ProfileStatus = ({status, updateStatus}) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);
  const activateEditMode = () => {
    setEditMode(true)
    setLocalStatus(status)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    updateStatus(localStatus)
  }

  return (
      <div>
        {!editMode
        ? <div>
          <span onDoubleClick={activateEditMode}>
            {status}
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