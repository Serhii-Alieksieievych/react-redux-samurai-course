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
        return ( isFetching 
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

const mapStateToProps = (state) =>({
    trashcats: state.trashcatsPage.trashcats,
    totalCount: state.trashcatsPage.totalCount,
    pageSize: state.trashcatsPage.pageSize,
    currentPage: state.trashcatsPage.currentPage,
    isFetching: state.trashcatsPage.isFetching,
    haveFollowingInProgress: state.trashcatsPage.haveFollowingInProgress,
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

const TrashcatsContainer = connect(mapStateToProps, {
    followTC,
    unfollowTC,
    setState,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingStatus,
    getUsers,
})(withAuthRedirect(TrashcatsAPIComponent));

export default TrashcatsContainer;