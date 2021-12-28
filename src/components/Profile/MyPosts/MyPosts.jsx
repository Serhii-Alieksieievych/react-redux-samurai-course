import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";
import PostForm from "./PostForm/PostForm";


const MyPosts = ({ addPost, posts }) => {
  return (
    <div>
      <PostForm onSubmit={(formData)=>{
        addPost(formData.post)
        formData.post = ''
      }}/>
      My posts
      <div className={classes.posts}>
        <h3>Posts</h3>
        {posts.map(post => <Post
          id={post.id}
          key={post.id}
          message={post.message}
          likesCount={post.likesCount}
        />)}
      </div>
    </div>
  )
}

export default MyPosts;