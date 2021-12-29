import { stopSubmit } from "redux-form";
import { AuthAPI, ProfileAPI } from "../api/api";

const SET_AUTH = 'SET_AUTH';
const SET_SMALL_AVATAR = 'SET_SMALL_AVATAR';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const RESET_AUTH = "RESET_AUTH";

export const login = (userId) => ({type: LOGIN, userId})
export const logout = () => ({ type: LOGOUT })

export const loginTC = (formData) => dispatch => {
    return AuthAPI.login(formData).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(login(response.data.data.userId))
            return response.data;
        }
        else {
            dispatch(stopSubmit("login", {_error: response.data.messages[0]}))
        }
    }).then(()=>{
        dispatch(checkAutorization())
    })
}

export const logoutTC = () => dispatch => {
    return AuthAPI.logoutAxios().then(r => {
        console.log(r)
        dispatch(resetAuthUserData())
    })
}

const resetAuthUserData = () => ({
    type: RESET_AUTH,
    data: {
        isLogged: null,
        id: null,
        email: null,
        login: null,
    }})

export const setAuthUserData = (isLogged, id, email, login) => ( 
    {   
        type: SET_AUTH,
        data: {
            isLogged,
            id,
            email,
            login
        }
    }
)

export const setSmallAvatar = (smallAvatarSRC) => (
    {
        type: SET_SMALL_AVATAR,
        data: {
            smallAvatarSRC,
        }
    }
)

export const toggleIsFetching = (isFetching) => (
    {
        type: TOGGLE_IS_FETCHING,
        data: {
            isFetching,
        }
    }
)

export const checkAutorization = () => (dispatch) => {
    return AuthAPI.getAuthStatus().then(data => {
        const isLogged = data.resultCode === 0 ? true : false;
        const { id, login, email } = data.data;
        if (isLogged) dispatch(setAuthUserData(isLogged, id, email, login))
        return id;
    }).then(id => {
        ProfileAPI.getProfileData(id).then(data => {
            dispatch(setSmallAvatar(data.photos.small))
            dispatch(toggleIsFetching(false))
        })
    })
}

const initialState = {
    id: null,
    email: null,
    login: null,
    smallAvatarSRC: null,
    isLogged: false,
    isFetching: false,
}

const profileReducer = (state = initialState, action) => {
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
            return { ...state, userId: action.userId }
        case LOGOUT:
            return { ...state, userId: null }
        default:
            return state;
    }
}

export default profileReducer;