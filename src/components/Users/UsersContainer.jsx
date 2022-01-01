import { connect } from "react-redux";
import {
    setState,
    toggleIsFetching,
    toggleFollowingStatus,
    getUsers,
} from "../../Redux/users-reducer";
import { followTC, unfollowTC } from "../../Redux/users-reducer";
import React from "react";
import { Grid } from 'svg-loaders-react'
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


class usersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers()

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
            toggleFollowingStatus,
            getUsers,
            isAuthorised,
            setCurrentPage,
        } = this.props;

        return (isFetching
            ? <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '90vh'
            }}>
                <Grid />
            </div>
            : <Users
                users={users}
                follow={followTC}
                unfollow={unfollowTC}
                totalCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                getUsers={getUsers}
                toggleFollowingStatus={toggleFollowingStatus}
                haveFollowingInProgress={haveFollowingInProgress}
                isAuthorised={isAuthorised}
                setCurrentPage={setCurrentPage}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    users: getUsersByReselectorSelector(state),
    totalCount: getTotalUsersCountSelector(state),
    pageSize: getPageSizeSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    haveFollowingInProgress: getHaveFollowingInProgressSelector(state),
})

/*const mapDispatchToProps = (dispatch) => ({
    follow: id => {
        dispatch(followActionCreator(id))
    },
    unfollow: id => {
        dispatch(unfollowActionCreator(id))
    },
    setusers: (users, totalCount) => {
        dispatch(setStateActionCreator(users, totalCount))
    },
    setCurrentPage: page => {
        dispatch(setCurrentPageAC(page))
    },
    toggleIsFetching: (isFetching)=>{
        dispatch(toggleFetchingStatusAC(isFetching))
    }
})*/

export default compose(
    connect(mapStateToProps, {
        followTC,
        unfollowTC,
        setState,
        toggleIsFetching,
        toggleFollowingStatus,
        getUsers,
    }),
    withAuthRedirect)(usersAPIComponent)