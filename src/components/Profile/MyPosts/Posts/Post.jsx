import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
  const { message, likesCount } = props;
  return (
    <div className={classes.item}>
      <img src="https://n1s2.hsmedia.ru/cd/53/e9/cd53e9c22b9ff0987a1d2727f3a3ee0d/728x485_1_f4e30c6a4f34e0d9b151f62a59f4cc9b@3504x2336_0xac120003_19816963821625299214.jpg" alt="avatar" className={classes.avatar} />
      <p className={classes.postMessage}>{message}</p>
      <div>Likes: {likesCount}</div>
    </div>
  )
}

export default Post;