import { AuthAPI, ProfileAPI } from "../api/api";

const SET_AUTH = 'SET_AUTH';
const SET_SMALL_AVATAR = 'SET_SMALL_AVATAR';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
    AuthAPI.getAuthStatus().then(data => {
        const isLogged = data.resultCode === 0 ? true : false;
        const { id, login, email } = data.data;
        dispatch(setAuthUserData(isLogged, id, email, login))
        return id;
    }).then(id => {
        ProfileAPI.getProfileData(id).then(data => {
            dispatch(setSmallAvatar(data.photos.small))
            dispatch(toggleIsFetching(false))
        })
    })
}

const initialState = {
    userId: null,
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
        case TOGGLE_IS_FETCHING:
            return {...state, ...action.data}
        case SET_SMALL_AVATAR:
            return { ...state, ...action.data };
        default:
            return state;
    }
}

export default profileReducer;