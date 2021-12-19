import { addPostActionCreator, changePostActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import MyContext from "../../../storeContext";

const MyPostsContainer = () => {
  return (
    <MyContext.Consumer>
      {store => {
        const dispatch = store.dispatch;
        const posts = store.getState().profilePage.postsArr;
        const changePost = (text => {
          dispatch(changePostActionCreator(text))
        })
        const addPost = () => {
          dispatch(addPostActionCreator())
          dispatch(changePostActionCreator(''))
        }

        return (<MyPosts addPost={addPost} changePost={changePost} postsArr={posts} />)
      }}
    </MyContext.Consumer>
  )
}

export default MyPostsContainer;