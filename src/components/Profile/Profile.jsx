import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  console.log(props)
  return (
      <main className={classes.content}>
      {/*<div>
        <img className={classes.decorationImg} src="https://kartinkin.net/uploads/posts/2021-07/1627170600_7-kartinkin-com-p-temnii-dlinnii-fon-krasivo-7.jpg" alt="" />
      </div>*/}
      <ProfileInfo
        {...props}
      />
      <MyPostsContainer />
      
    </main>
  )
}

export default Profile;