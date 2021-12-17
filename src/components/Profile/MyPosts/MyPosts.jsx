import React, { useRef } from "react";
import { addPostActionCreator, changePostActionCreator } from "../../../Redux/profile-reducer";
import classes from './MyPosts.module.css';
import Post from "./Posts/Post";


const MyPosts = ({ profileState, dispatch}) => {
  const textArea = useRef('')
  const changePostHandler = () => {
    dispatch(changePostActionCreator(textArea.current.value))
    textArea.current.value = profileState.currentPostArea;
  }
  const addPostHandler = (e) => { 
    e.preventDefault()
    if (textArea.current.value.trim().length > 0){
      dispatch(addPostActionCreator())
      dispatch(changePostActionCreator(''))
      textArea.current.value = profileState.currentPostArea;
    }
  }
  return (
    <div>
      My posts
      <form onSubmit={addPostHandler}>
        <textarea onChange={changePostHandler} ref={textArea} id="" cols="30" rows="10"/>
        <button>Add post</button>
      </form>
      <div className={classes.posts}>
        <h3>Posts</h3>
        {profileState.postsArr.map(post=><Post
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