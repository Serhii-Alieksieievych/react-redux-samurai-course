import { addPostActionCreator, changePostActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  posts: state.profilePage.postsArr,
  newpost: state.profilePage.currentPostArea,
})

const mapDispatchToProps = (dispatch) => ({
  changePost: text => {
    dispatch(changePostActionCreator(text))
  },
  addPost: () => {
    dispatch(addPostActionCreator())
    dispatch(changePostActionCreator(''))
  }
})

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;