import { createSelector } from 'reselect';
import { AppStateType } from './redux-store';

export const getUsersSelector = (state :AppStateType) => state.usersPage.users;

export const getUsersByReselectorSelector = createSelector(getUsersSelector, (users) => (
    users.filter(() => true)
));


export const getTotalUsersCountSelector = (state: AppStateType) => state.usersPage.totalCount
export const getPageSizeSelector = (state: AppStateType) => state.usersPage.pageSize
export const getCurrentPageSelector = (state: AppStateType) => state.usersPage.currentPage
export const getIsFetchingSelector = (state: AppStateType) => state.usersPage.isFetching
export const getHaveFollowingInProgressSelector = (state: AppStateType) => state.usersPage.haveFollowingInProgress