import { createSelector } from 'reselect';

export const getUsersSelector = state => state.usersPage.users;

export const getUsersByReselectorSelector = createSelector(getUsersSelector, (users) => (
    users.filter(() => true)
));


export const getTotalUsersCountSelector = state => state.usersPage.totalCount
export const getPageSizeSelector = state => state.usersPage.pageSize
export const getCurrentPageSelector = state => state.usersPage.currentPage
export const getIsFetchingSelector = state => state.usersPage.isFetching
export const getHaveFollowingInProgressSelector = state => state.usersPage.haveFollowingInProgress