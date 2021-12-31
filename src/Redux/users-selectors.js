import { createSelector } from 'reselect';

export const getUsersSelector = state => state.trashcatsPage.trashcats;

export const getUsersByReselectorSelector = createSelector(getUsersSelector, (users) => (
    users.filter(() => true)
));


export const getTotalUsersCountSelector = state => state.trashcatsPage.totalCount
export const getPageSizeSelector = state => state.trashcatsPage.pageSize
export const getCurrentPageSelector = state => state.trashcatsPage.currentPage
export const getIsFetchingSelector = state => state.trashcatsPage.isFetching
export const getHaveFollowingInProgressSelector = state => state.trashcatsPage.haveFollowingInProgress