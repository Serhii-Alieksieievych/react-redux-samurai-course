import React from "react";
import { connect } from "react-redux";
import { setProfileInfo } from "../../Redux/profile-reducer";
import Profile from "./Profile";
import { Grid } from 'svg-loaders-react'
import { useParams } from "react-router-dom";
import { getProfileData } from "../../api/api";

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
    const userId = this.props.params.userId ? this.props.params.userId : 2;
    getProfileData(userId).then(data => {
      this.props.setProfileInfo(data)})} 

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
  profileInfo: state.profilePage.profileInfo,
})
export default connect(mapStateToProps,{setProfileInfo})(withRouter(ProfileContainer));