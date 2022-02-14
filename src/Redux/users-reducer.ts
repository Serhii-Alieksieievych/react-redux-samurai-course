import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { UsersAPI, FollowAPI } from "../api/api";
import { ResultCodeEnum } from "../types/ApiTypes";
import { UserType, SetCurrentPageType, ToggleFollowingStatusType } from "../types/UsersTypes";
import { AppStateType } from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_FETCHING_STATUS = 'TOGGLE_FETCHING_STATUS';
export const TOGGLE_FOLLOWING_STATUS = 'TOGGLE_FOLLOWING_STATUS'

type InitialStateType = {
    users: Array<UserType>,
    totalCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    haveFollowingInProgress: Array<number>,
}

type ActionsTypes = FollowType | UnfollowType | SetStateType
    | ToggleIsFetchingType | ToggleFollowingStatusType | SetCurrentPageType

type FollowType = { type: typeof FOLLOW, id: number }
type UnfollowType = { type: typeof UNFOLLOW, id: number }
type SetStateType = { type: typeof SET_STATE, users: Array<UserType>, totalCount: number }
type ToggleIsFetchingType = { type: typeof TOGGLE_FETCHING_STATUS, isFetching: boolean }

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> 

export const follow = (id: number) :FollowType => ({ type: FOLLOW, id: id })
export const unfollow = (id: number) :UnfollowType => ({ type: UNFOLLOW, id: id })
export const setState = (users: Array<UserType>, totalCount: number) :SetStateType=> (
    { type: SET_STATE, users, totalCount }
)
export const setCurrentPage = (page: number) :SetCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage: page })
export const toggleIsFetching = (isFetching: boolean) :ToggleIsFetchingType => (
    { type: TOGGLE_FETCHING_STATUS, isFetching }
)
export const toggleFollowingStatus = (id: number) :ToggleFollowingStatusType => ({ type: TOGGLE_FOLLOWING_STATUS, id })

export const getUsers = (currentPage = 1)
    :ThunkType => async (dispatch: Dispatch<ActionsTypes>, getState: () => AppStateType) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    const data = await UsersAPI.getUsers(currentPage)
    dispatch(toggleIsFetching(false))
    dispatch(setState(data.items, data.totalCount))
};
export const followTC = (user: UserType) :ThunkType => async (dispatch) => {
    await dispatch(toggleFollowingStatus(user.id))
    const data = await FollowAPI.followAxios(user.id)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(follow(user.id))
    }
    dispatch(toggleFollowingStatus(user.id))
}
export const unfollowTC = (user: UserType) :ThunkType => async (dispatch) => {
    await dispatch(toggleFollowingStatus(user.id))
    const data = await FollowAPI.unfollowAxios(user.id)
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

const usersReducer = (state :InitialStateType = initialState, action: ActionsTypes) : InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((user: UserType) :UserType => {
                    return user.id === action.id
                        ? { ...user, followed: true }
                        : { ...user };
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user: UserType): UserType => {
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
            return state.haveFollowingInProgress.some((id :number) => id === action.id)
                ? { ...state, haveFollowingInProgress: state.haveFollowingInProgress.filter(id => id !== action.id) }
                : { ...state, haveFollowingInProgress: [...state.haveFollowingInProgress, action.id] }
        default:
            return state;
    }
}

export default usersReducer;