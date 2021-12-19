import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({store}) => {
    return (
        <main className={classes.content}>
        <div>
          <img className={classes.decorationImg} src="https://kartinkin.net/uploads/posts/2021-07/1627170600_7-kartinkin-com-p-temnii-dlinnii-fon-krasivo-7.jpg" alt="" />
        </div>
        <ProfileInfo imgSrc="https://animalsglobe.ru/wp-content/uploads/2021/05/22-1-1536x864.jpg" />
        <MyPostsContainer store={store}/>
        
      </main>
    )
}

export default Profile;