import React, { useRef } from "react";
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";


const MyPosts = ({ addPost, changePost, posts, newpost }) => {
  const textArea = useRef('')
  const changePostHandler = () => {
    changePost(textArea.current.value);
  }
  const addPostHandler = (e) => {
    e.preventDefault()
    if (textArea.current.value.trim().length > 0) {
      addPost()
    }
  }
  return (
    <div>
      My posts
      <form onSubmit={addPostHandler}>
        <textarea onChange={changePostHandler} value={newpost} ref={textArea} id="" cols="30" rows="10" />
        <button>Add post</button>
      </form>
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