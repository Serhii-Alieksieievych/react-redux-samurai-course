import { UsersAPI, FollowAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_FETCHING_STATUS = 'TOGGLE_FETCHING_STATUS';
const TOGGLE_FOLLOWING_STATUS = 'TOGGLE_FOLLOWING_STATUS'

export const follow = (id) => ({ type: FOLLOW, id: id })
export const unfollow = (id) => ({ type: UNFOLLOW, id: id })
export const setState = (users, totalCount) => ({ type: SET_STATE, users, totalCount })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_FETCHING_STATUS, isFetching })
export const toggleFollowingStatus = (id) => ({ type: TOGGLE_FOLLOWING_STATUS, id })

export const getUsers = (currentPage = 1) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    const data = await UsersAPI.getUsers(currentPage)
    dispatch(toggleIsFetching(false))
    dispatch(setState(data.items, data.totalCount))
};

export const followTC = (user) => async (dispatch) => {
    dispatch(toggleFollowingStatus(user.id))
    const data = await FollowAPI.followAxios(user)
    if (data.resultCode === 0) {
        dispatch(follow(user.id))
    }
    dispatch(toggleFollowingStatus(user.id))
}

export const unfollowTC = (user) => async (dispatch) => {
    dispatch(toggleFollowingStatus(user.id))
    const data = await FollowAPI.unfollowAxios(user)
    if (data.resultCode === 0) {
        dispatch(unfollow(user.id))
    }
    dispatch(toggleFollowingStatus(user.id))
}

const initialState = {
    users: [],
    totalCount: 0,
    pageSize: 12,
    currentPage: 1,
    isFetching: false,
    haveFollowingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    return user.id === action.id
                        ? { ...user, followed: true }
                        : { ...user };
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    return user.id === action.id
                        ? { ...user, followed: false }
                        : { ...user };
                })
            };

        case SET_STATE:
            return { ...state, users: [...action.users], totalCount: action.totalCount };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case TOGGLE_FETCHING_STATUS:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_FOLLOWING_STATUS:
            return state.haveFollowingInProgress.some(id => id === action.id)
                ? { ...state, haveFollowingInProgress: state.haveFollowingInProgress.filter(id => id !== action.id) }
                : { ...state, haveFollowingInProgress: [...state.haveFollowingInProgress, action.id] }
        default:
            return state;
    }
}

export default usersReducer;