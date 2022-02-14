import { type } from "os";
import { AuthAPI, ProfileAPI, securityAPI } from "../api/api";
import { AppStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { AuthFormDataType } from "../types/AuthTypes";
import { ResultCodeEnum } from "../types/ApiTypes";
import { Dispatch } from "react";

const SET_AUTH = 'SET_AUTH';
const SET_SMALL_AVATAR = 'SET_SMALL_AVATAR';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const LOGIN = 'LOGIN';
const HAD_ERR = 'HAD_ERR';
const LOGOUT = 'LOGOUT';
const RESET_AUTH = "RESET_AUTH";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL"

export type AuthInitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    smallAvatarSRC: string | null,
    isLogged: boolean,
    isFetching: boolean,
    captchaUrl: string | null,
    hadErr: boolean,
    userId: null | number
}
type SetCaptchaUrlType = {
    type: typeof SET_CAPTCHA_URL,
    captchaUrl: string
}
type LoginType = { type: typeof LOGIN, userId: number }
type LogoutType = { type: typeof LOGOUT }
type HadErrType = { type: typeof HAD_ERR, payload: any }
type AuthUserDataType = {
    isLogged: boolean,
    id: null | number,
    email: null | string,
    login: null | string,
}
type ResetAuthUserDataType = {
    type: typeof RESET_AUTH,
    data: AuthUserDataType,
}
type SetAuthUserDataType = {
    type: typeof SET_AUTH,
    data: AuthUserDataType,
}
type SetSmallAvatarType = {
    type: typeof SET_SMALL_AVATAR,
    data: {
        smallAvatarSRC: string,
    }
}
type TogleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    data: {
        isFetching: boolean,
    }
}
type ActionsTypes = TogleIsFetchingType | SetSmallAvatarType | SetAuthUserDataType
    | ResetAuthUserDataType | HadErrType | LogoutType | LoginType | SetCaptchaUrlType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> 

const setCaptchaUrl = (captchaUrl :string) :SetCaptchaUrlType => ({type: SET_CAPTCHA_URL, captchaUrl})
export const login = (userId :number) :LoginType => ({type: LOGIN, userId})
export const logout = () :LogoutType => ({ type: LOGOUT })
const hadErr = (payload :any) :HadErrType=> ({type: HAD_ERR, payload})
const resetAuthUserData = () :ResetAuthUserDataType => ({
    type: RESET_AUTH,
    data: {
        isLogged: false,
        id: null,
        email: null,
        login: null,
    }
})
export const setAuthUserData = (
    isLogged: boolean,
    id: number,
    email: string,
    login: string
) :SetAuthUserDataType => ({
    type: SET_AUTH,
    data: {
        isLogged,
        id,
        email,
        login
    }
})
export const setSmallAvatar = (smallAvatarSRC: string) :SetSmallAvatarType => ({
    type: SET_SMALL_AVATAR,
    data: {
        smallAvatarSRC,
    }
})
export const toggleIsFetching = (isFetching: boolean) :TogleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING,
    data: {
        isFetching,
    }
})


export const loginTC = (formData: AuthFormDataType) => async (dispatch: Dispatch<any>)=> {
    const data = await AuthAPI.login(formData)
    console.log(data)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(login(data.data.userId))
        dispatch(checkAutorization())
    } else if (data.resultCode === 10){
        dispatch(getCaptchaUrl())
    } else {
        dispatch(hadErr(null))
        return data.messages[0]
    }
}
export const getCaptchaUrl = () :ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(setCaptchaUrl(captchaUrl))
}
export const logoutTC = () :ThunkType => async (dispatch) => {
    const data = await AuthAPI.logout()
    dispatch(resetAuthUserData())
}
export const checkAutorization = (): ThunkType => (dispatch) => {
    return AuthAPI.getAuthStatus().then(data => {
        const isLogged = data.resultCode === ResultCodeEnum.Success ? true : false;
        const { id, login, email } = data.data;
        if (isLogged) dispatch(setAuthUserData(isLogged, id, email, login))
        return id;
    }).then((id: number) => {
        id && ProfileAPI.getProfileData(id).then(data => {
            dispatch(setSmallAvatar(data.photos.small))
            dispatch(toggleIsFetching(false))
        })
    })
}

const initialState : AuthInitialStateType = {
    id: null,
    email: null,
    login: null,
    smallAvatarSRC: null,
    isLogged: false,
    isFetching: false,
    captchaUrl: null,
    hadErr: false,
    userId: null,
}

const authReducer = (state: AuthInitialStateType = initialState, action :any): AuthInitialStateType => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, ...action.data};
        case RESET_AUTH:
            return { ...state, ...action.data };
        case TOGGLE_IS_FETCHING:
            return {...state, ...action.data}
        case SET_SMALL_AVATAR:
            return { ...state, ...action.data };
        case LOGIN:
            return { ...state, userId: action.userId, hadErr: false }
        case LOGOUT:
            return { ...state, userId: null }
        case HAD_ERR:
            return { ...state, hadErr: true }
        case SET_CAPTCHA_URL:
            return { ...state, captchaUrl: action.captchaUrl}
        default:
            return state;
    }
}

export default authReducer;