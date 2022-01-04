import { AuthAPI, ProfileAPI } from "../api/api";

const SET_AUTH = 'SET_AUTH';
const SET_SMALL_AVATAR = 'SET_SMALL_AVATAR';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const LOGIN = 'LOGIN';
const HAD_ERR = 'HAD_ERR';
const LOGOUT = 'LOGOUT';
const RESET_AUTH = "RESET_AUTH";

export const login = (userId) => ({type: LOGIN, userId})
export const logout = () => ({ type: LOGOUT })
const hadErr = (payload)=> ({type: HAD_ERR, payload})

export const loginTC = formData => async dispatch => {
    const response = await AuthAPI.login(formData)
    if (response.data.resultCode === 0) {
        dispatch(login(response.data.data.userId))
        const data = await response.data;
        dispatch(checkAutorization())
    }
    else {
        dispatch(hadErr())
        return response.data.messages[0]
    }
}

export const logoutTC = () => async dispatch => {
    const data = await AuthAPI.logoutAxios()
    dispatch(resetAuthUserData())
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
    hadErr: false,
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
            return { ...state, userId: action.userId, hadErr: false }
        case LOGOUT:
            return { ...state, userId: null }
        case HAD_ERR:
            return { ...state, hadErr: true }
        default:
            return state;
    }
}

export default profileReducer;