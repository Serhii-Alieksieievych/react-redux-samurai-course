const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const followActionCreator = (id) => ({ type: FOLLOW, id:id })
export const unfollowActionCreator = (id) => ({ type: UNFOLLOW, id:id })
export const setStateActionCreator = (trashcats, totalCount) => ({ type: SET_STATE, trashcats:trashcats, totalCount:totalCount })
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page })

const initialState = {
    trashcats: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
}

const trashcatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, trashcats: state.trashcats.map(trashcat => {
                    return trashcat.id === action.id
                        ? { ...trashcat, isFollowed: true }
                        : trashcat;
                })};
        case UNFOLLOW:
            return {
                ...state,
                trashcats: state.trashcats.map(trashcat => {
                    return trashcat.id === action.id
                        ? { ...trashcat, isFollowed: false }
                        : trashcat;
                })};

        case SET_STATE:
            return {...state, trashcats: [...action.trashcats], totalCount: action.totalCount };
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        default:
            return state;
    }
}

export default trashcatsReducer;