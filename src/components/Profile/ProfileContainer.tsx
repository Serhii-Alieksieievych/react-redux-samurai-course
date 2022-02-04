import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { setProfile, getStatus, updateStatus, sendProfilePhoto, updateProfileInfo } from "../../Redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getProfileInfoSelector, getStatusSelector } from "../../Redux/profile-selectors";
import { useEffect } from "react";
import Preloader from "../common/Preloader/Preloader";
import { AppStateType } from "../../Redux/redux-store";
import { startNewDialogFromUsersPage } from "../../Redux/dialogs-reducer";

export type ProfileContainerPropsType = {
  profileInfo:{data:any}
  params: {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
      github: string,
      vk: string,
      facebook: string,
      instagram: string,
      twitter: string,
      website: string,
      youtube: string,
      mainLink: string,
      photos: {
        small: (string | null),
        large: (string | null)
      }
    }
  },
  status: string,
  setProfile:(userId: number)=> void,
  getStatus: (userId: number)=> void,
  updateStatus:()=> void,
  sendProfilePhoto:()=> void,
  updateProfileInfo:()=> void,
  startNewDialogFromUsersPage: (id: number) => Promise<void>,
}

const withRouter = (WrappedComponent :any) => (props: any) => {
  const params = useParams();
  // etc... other react-router-dom v6 hooks
  return (
    <WrappedComponent
      {...props}
      params={params}
    // etc...
    />
  );
};

const ProfileContainer: React.FC<ProfileContainerPropsType> = (props) => {
  let isOwner = !props.params.userId;
  useEffect(()=>{
    let { userId } = props.params;
    props.setProfile(userId)
    props.getStatus(userId)
  },[props.params.userId])
  return (
    props.profileInfo.data
      ? <Profile {...props} isOwner={isOwner} />
      : <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '90vh'
        }}
      >
        <Preloader />
      </div>
  )
}

const mapStateToProps = (state :AppStateType) => ({
  profileInfo: getProfileInfoSelector(state),
  status: getStatusSelector(state),
})

export default  compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, {
    setProfile,
    getStatus,
    updateStatus,
    sendProfilePhoto,
    updateProfileInfo,
    startNewDialogFromUsersPage
  })
)(ProfileContainer)