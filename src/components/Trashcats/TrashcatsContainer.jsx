import { connect } from "react-redux";
import {
    follow,
    setCurrentPage,
    setState,
    toggleIsFetching,
    unfollow,
    toggleFollowingStatus,
} from "../../Redux/trashcats-reducer";
import React from "react";
import { Grid } from 'svg-loaders-react'
import Trashcats from "./Trashcats";
import { getUsers } from "../../api/api";

class TrashcatsAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers().then(data => {
            this.props.toggleIsFetching(false)
            this.props.setState(data.items, data.totalCount)
            
        })
    }
    onPageChanges = (currentPage) => {
        this.props.toggleIsFetching(true);
        getUsers(currentPage).then(data => {
            this.props.setState(data.items, data.totalCount)
            this.props.toggleIsFetching(false);
        })
        this.props.setCurrentPage(+currentPage)
    }
    render() {
        const {
            trashcats,
            follow,
            unfollow,
            totalCount,
            pageSize,
            currentPage,
            isFetching,
            haveFollowingInProgress,
            toggleFollowingStatus
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
                follow={follow}
                unfollow={unfollow}
                totalCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanges={this.onPageChanges}
                toggleFollowingStatus={toggleFollowingStatus}
                haveFollowingInProgress={haveFollowingInProgress}
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
    follow,
    unfollow,
    setState,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingStatus,
})(TrashcatsAPIComponent);

export default TrashcatsContainer;