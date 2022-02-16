import { AuthAPI, ProfileAPI } from "../api/api";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";
import { IProfileInfo, IProfileInfoRequest, IProfileInfoResponse } from "../types/ProfileTypes";

const CHANGE_POST = 'CHANGE-POST';
const ADD_POST = 'ADD-POST';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';
const SET_STATUS = 'SET_STATUS';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

type SetStatusType = {type: typeof SET_STATUS, status: string}
type IsFetchingType = { type: typeof TOGGLE_FETCHING, isFetching: boolean}
type AddPostType = { type : typeof ADD_POST, text: string }
type ChangePostType = { type : typeof CHANGE_POST, text: string }

type SetProfileInfoType = { type: typeof SET_PROFILE_INFO, profileInfo: IProfileInfo }
type ActionsTypes = SetStatusType | IsFetchingType | AddPostType | ChangePostType | SetProfileInfoType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> 


export const setStatus = (status: string) :SetStatusType => ({type: SET_STATUS, status})
export const toggleFetching = (isFetching: boolean) :IsFetchingType => ({ type: TOGGLE_FETCHING, isFetching })
export const addPost = (text: string) :AddPostType => ({ type: ADD_POST, text })
export const changePost = (text: string) : ChangePostType=> ({
    type: CHANGE_POST,
    text: text,
})
export const setProfileInfo = (profileInfo :IProfileInfo) :SetProfileInfoType => ({type: SET_PROFILE_INFO, profileInfo})

export const updateProfileInfo = (profileInfo: IProfileInfoRequest) :ThunkType => async (dispatch)=> {
    const response = await ProfileAPI.setProfileData(profileInfo)
}

export const sendProfilePhoto = (photo : File, id : number) :ThunkType=> {
    return async (dispatch) => {
        //const avtorisationData = await AuthAPI.getAuthStatus();
        const response = await ProfileAPI.sendPhoto(photo);
        dispatch(setProfile(id))
    }
}

export const setProfile = (id: number): ThunkType => async (dispatch) => {
    dispatch(toggleFetching(true))
    const data = await ProfileAPI.getProfileData(id)
    dispatch(setProfileInfo(data))
}

export const getStatus = (id: number): ThunkType => async (dispatch) => {
    const userId = id;
    const status = await ProfileAPI.getStatus(userId)
        dispatch(setStatus(status))
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