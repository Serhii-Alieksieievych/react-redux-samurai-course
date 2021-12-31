import { connect } from "react-redux";
import {
    setCurrentPage,
    setState,
    toggleIsFetching,
    toggleFollowingStatus,
    getUsers,
} from "../../Redux/trashcats-reducer";
import { followTC, unfollowTC } from "../../Redux/trashcats-reducer";
import React from "react";
import { Grid } from 'svg-loaders-react'
import Trashcats from "./Trashcats";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
    getCurrentPageSelector,
    getHaveFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector,
    getUsersByReselectorSelector,
} from "../../Redux/users-selectors";


class TrashcatsAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers()
        
    }
    render() {
        const {
            trashcats,
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
            : <Trashcats
                trashcats={trashcats}
                follow={followTC}
                unfollow={unfollowTC}
                totalCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                getUsers={getUsers}
                toggleFollowingStatus={toggleFollowingStatus}
                haveFollowingInProgress={haveFollowingInProgress}
                isAuthorised={isAuthorised}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    trashcats: getUsersSelector(state),
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
    setTrashcats: (trashcats, totalCount) => {
        dispatch(setStateActionCreator(trashcats, totalCount))
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
        setCurrentPage,
        toggleIsFetching,
        toggleFollowingStatus,
        getUsers,
    }),
    withAuthRedirect)(TrashcatsAPIComponent)