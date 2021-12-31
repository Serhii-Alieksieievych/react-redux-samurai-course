import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { Grid } from 'svg-loaders-react'
import { useParams } from "react-router-dom";
import { setProfile , getStatus, updateStatus } from "../../Redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getProfileInfoSelector, getStatusSelector } from "../../Redux/profile-selectors";

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


class ProfileContainer extends React.Component {
  componentDidMount(){
    let {userId} = this.props.params;
    this.props.setProfile(userId)
    this.props.getStatus(userId)
    } 

  render(){
    return(
      this.props.profileInfo
        ? <Profile {...this.props} />
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