import { addPost, changePost } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  posts: state.profilePage.postsArr,
  newpost: state.profilePage.currentPostArea,
})

const mapDispatchToProps = (dispatch) => ({
  changePost: text => {
    dispatch(changePost(text))
  },
  addPost: (post) => {
    dispatch(addPost(post))
    dispatch(changePost(''))
  }
})

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;