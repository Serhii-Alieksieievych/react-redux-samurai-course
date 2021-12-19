import { addPostActionCreator, changePostActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ store }) => {
  const dispatch = store.dispatch;
  const posts = store.getState().profilePage.postsArr;
  const changePost = (text => {
    dispatch(changePostActionCreator(text))
  })
  const addPost = () => {
      dispatch(addPostActionCreator())
      dispatch(changePostActionCreator(''))
  }
  return (
    <MyPosts addPost={addPost} changePost={changePost}  postsArr={posts}/>
  )
}

export default MyPostsContainer;