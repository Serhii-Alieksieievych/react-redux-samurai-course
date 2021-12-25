import { ProfileAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST';
const ADD_POST = 'ADD-POST';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

export const addPostActionCreator = () => ({ type: "ADD-POST" })
export const changePostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo})

export const setProfile = (id)=> (dispatch) =>{
    const userId = id ? id : 2;
    ProfileAPI.getProfileData(userId).then(data => {
        dispatch(setProfileInfo(data))
    })
} 


const initialState = {
    currentPostArea: '',
    profileInfo: null,
    postsArr: [
        { id: 1, message: `post-opost`, likesCount: 0 },
        { id: 2, message: `post-pos`, likesCount: 0 },
        { id: 3, message: `post-opos`, likesCount: 0 },
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsArr.length + 1,
                message: state.currentPostArea,
                likesCount: 0,
            }
            return {...state, postsArr: [...state.postsArr, newPost], currentPostArea: ''};
        case UPDATE_NEW_POST_TEXT:
            return {...state, currentPostArea: action.newText};
        case SET_PROFILE_INFO:
            return {...state, profileInfo: action.profileInfo};
        default:
            return state;
    }
}

export default profileReducer;