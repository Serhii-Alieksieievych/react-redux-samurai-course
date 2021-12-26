import { ProfileAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST';
const ADD_POST = 'ADD-POST';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_STATUS = 'SET_STATUS';


export const setStatus = (status) => ({type: SET_STATUS , status})
export const addPostActionCreator = () => ({ type: "ADD-POST" })
export const changePostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo})

export const setProfile = (id)=> (dispatch) =>{
    const userId = id ? id : 21473;
    ProfileAPI.getProfileData(userId).then(data => {
        dispatch(setProfileInfo(data))
    })
}

export const getStatus = (id) => (dispatch) => {
    const userId = id ? id : 21473;
    ProfileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status).then(data => {
        console.log(data)
        if (!data.resultCode) {
            dispatch(setStatus(status))
        }
    })
}


const initialState = {
    currentPostArea: '',
    profileInfo: null,
    status: '',
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
        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
}

export default profileReducer;