const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_FETCHING_STATUS = 'TOGGLE_FETCHING_STATUS';
const TOGGLE_FOLLOWING_STATUS = 'TOGGLE_FOLLOWING_STATUS'

export const follow = (id) => ({ type: FOLLOW, id:id })
export const unfollow = (id) => ({ type: UNFOLLOW, id:id })
export const setState = (trashcats, totalCount) => ({ type: SET_STATE, trashcats, totalCount })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_FETCHING_STATUS, isFetching })
export const toggleFollowingStatus = (id) => ({type: TOGGLE_FOLLOWING_STATUS, id})

const initialState = {
    trashcats: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    haveFollowingInProgress: [],
}

const trashcatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, trashcats: state.trashcats.map(trashcat => {
                    return trashcat.id === action.id
                        ? { ...trashcat, followed: true }
                        : {...trashcat};
                })};
        case UNFOLLOW:
            return {
                ...state,
                trashcats: state.trashcats.map(trashcat => {
                    return trashcat.id === action.id
                        ? { ...trashcat, followed: false }
                        : {...trashcat};
                })};

        case SET_STATE:
            return {...state, trashcats: [...action.trashcats], totalCount: action.totalCount };
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_FETCHING_STATUS:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_STATUS:
            return state.haveFollowingInProgress.some(id => id === action.id)
                ? {...state, haveFollowingInProgress:state.haveFollowingInProgress.filter(id => id !== action.id)}
                : {...state, haveFollowingInProgress:[...state.haveFollowingInProgress, action.id]}
        default:
            return state;
    }
}

export default trashcatsReducer;