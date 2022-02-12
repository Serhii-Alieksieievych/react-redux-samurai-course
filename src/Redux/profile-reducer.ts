import { ProfileAPI } from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";

const CHANGE_POST = 'CHANGE-POST';
const ADD_POST = 'ADD-POST';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_STATUS = 'SET_STATUS';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

type SetStatusType = {type: typeof SET_STATUS, status: string}
type IsFetchingType = { type: typeof TOGGLE_FETCHING, isFetching: boolean}
type AddPostType = { type : typeof ADD_POST, text: string }
type ChangePostType = { type : typeof CHANGE_POST, text: string }
type ProfileInfoType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string,
        photos: {
            small: (string | null),
            large: (string | null)
        }
    }
}
type SetProfileInfoType = { type: typeof SET_PROFILE_INFO, profileInfo: ProfileInfoType }
type ActionsTypes = SetStatusType | IsFetchingType | AddPostType | ChangePostType | SetProfileInfoType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> 


export const setStatus = (status: string) :SetStatusType => ({type: SET_STATUS, status})
export const toggleFetching = (isFetching: boolean) :IsFetchingType => ({ type: TOGGLE_FETCHING, isFetching })
export const addPost = (text: string) :AddPostType => ({ type: ADD_POST, text })
export const changePost = (text: string) : ChangePostType=> ({
    type: CHANGE_POST,
    text: text,
})
export const setProfileInfo = (profileInfo :ProfileInfoType) :SetProfileInfoType => ({type: SET_PROFILE_INFO, profileInfo})

export const updateProfileInfo = (profileInfo: ProfileInfoType) :ThunkType => async (dispatch)=> {
    const response = await ProfileAPI.setProfileData(profileInfo)
    dispatch(setProfile(null))
}

export const sendProfilePhoto = (photo : string, id : number) :ThunkType=> {
    return async (dispatch) => {
        const response = await ProfileAPI.sendPhoto(photo);
        dispatch(setProfile(id))
    }
}

export const setProfile = (id: number | null): ThunkType => async (dispatch) => {
    dispatch(toggleFetching(true))
    const userId = id;
    const data = await ProfileAPI.getProfileData(userId)
    dispatch(setProfileInfo(data))
}

export const getStatus = (id: number | null): ThunkType => async (dispatch) => {
    const userId = id;
    const data = await ProfileAPI.getStatus(userId)
        dispatch(setStatus(data))
}

export const updateStatus = (status: string): ThunkType  => async (dispatch) => {
    const data = await ProfileAPI.updateStatus(status)
    if (!data.resultCode) {
    dispatch(setStatus(status))
    }
}


const initialState = {
    currentPostArea: '',
    profileInfo: {
        isFetching: false,
        data: null,
    },
    status: '',
    postsArr: [
        { id: 1, message: `post-opost`, likesCount: 0 },
        { id: 2, message: `post-pos`, likesCount: 0 },
        { id: 3, message: `post-opos`, likesCount: 0 },
    ],
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsArr.length + 1,
                message: action.text,
                likesCount: 0,
            }
            return {...state, postsArr: [...state.postsArr, newPost], currentPostArea: ''};
        case CHANGE_POST:
            return {...state, currentPostArea: action.text};
        case SET_PROFILE_INFO:
            return { ...state, profileInfo: { ...state.profileInfo, data: action.profileInfo, isFetching: false}};
        case SET_STATUS:
            return {...state, status: action.status};
        case TOGGLE_FETCHING:
            return { ...state, profileInfo: { ...state.profileInfo, isFetching: action.isFetching}};
        default:
            return state;
    }
}

export default profileReducer;