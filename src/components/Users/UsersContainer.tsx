import { connect } from "react-redux";
import {
    setState,
    toggleIsFetching,
    toggleFollowingStatus,
    getUsers,
} from "../../Redux/users-reducer";
import { followTC, unfollowTC } from "../../Redux/users-reducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
    getCurrentPageSelector,
    getHaveFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersByReselectorSelector,
} from "../../Redux/users-selectors";
import { AppStateType } from "../../Redux/redux-store";
import { UserType, SetCurrentPageType, ToggleFollowingStatusType } from "../../types/UsersTypes";

type UsersAPIContainerPropsType = {
    users: Array<UserType>,
    followTC: (user: UserType) => Promise<void>,
    unfollowTC: (user: UserType) => Promise<void>,
    totalCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    haveFollowingInProgress: Array<number>,
    toggleFollowingStatus: (id: number) => ToggleFollowingStatusType,
    getUsers: (currentPage: number) => Promise<void>,
    isAuthorised: boolean,
    setCurrentPage: (page: number)=> SetCurrentPageType,
}

type PropsFromStateType = {
    users: Array<UserType>,
    totalCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    haveFollowingInProgress: Array<number>,
}

class UsersAPIComponent extends React.Component<UsersAPIContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(1)

    }
    render() {
        const {
            users,
            followTC,
            unfollowTC,
            totalCount,
            pageSize,
            currentPage,
            isFetching,
            haveFollowingInProgress,
            getUsers,
        } = this.props;

        return (isFetching
            ? <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '90vh'
            }}>
                <Preloader />
            </div>
            : <Users
                users={users}
                follow={followTC}
                unfollow={unfollowTC}
                totalCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                getUsers={getUsers}
                haveFollowingInProgress={haveFollowingInProgress}
            />
        )
    }
}

const mapStateToProps = (state :AppStateType) :PropsFromStateType => ({
    users: getUsersByReselectorSelector(state),
    totalCount: getTotalUsersCountSelector(state),
    pageSize: getPageSizeSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    haveFollowingInProgress: getHaveFollowingInProgressSelector(state),
})

export default compose(
    connect(mapStateToProps, {
        followTC,
        unfollowTC,
        setState,
        toggleIsFetching,
        toggleFollowingStatus,
        getUsers,
    }),
    withAuthRedirect)(UsersAPIComponent)