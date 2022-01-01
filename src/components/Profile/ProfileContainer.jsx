import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { Grid } from 'svg-loaders-react'
import { useParams } from "react-router-dom";
import { setProfile , getStatus, updateStatus } from "../../Redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getProfileInfoSelector, getStatusSelector } from "../../Redux/profile-selectors";
import { useEffect } from "react";

const withRouter = WrappedComponent => props => {
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

const ProfileContainer = (props) => {
  useEffect(()=>{
    let { userId } = props.params;
    props.setProfile(userId)
    props.getStatus(userId)
  },[props.params.userId])

  return (
    props.profileInfo
      ? <Profile {...props} />
      : <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '90vh'
        }}
      >
        <Grid />
      </div>
  )
}

const mapStateToProps = (state) => ({
  profileInfo: getProfileInfoSelector(state),
  status: getStatusSelector(state),
})

export default  compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { setProfile, getStatus, updateStatus })
)(ProfileContainer)