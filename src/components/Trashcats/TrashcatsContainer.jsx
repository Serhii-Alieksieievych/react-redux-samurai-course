
import { connect } from "react-redux";
import { follow, setCurrentPage, setState, toggleIsFetching, unfollow } from "../../Redux/trashcats-reducer";
import axios from "axios";
import React from "react";
import { Grid } from 'svg-loaders-react'
import Trashcats from "./Trashcats";

class TrashcatsAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users',
            {withCredentials: true}    
        ).then(resp => {
            this.props.toggleIsFetching(false)
            this.props.setState(resp.data.items, resp.data.totalCount)
            
        })
    }
    onPageChanges = (span) => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${span}`,
            {withCredentials:true}
        ).then(resp => {
            this.props.setState(resp.data.items, resp.data.totalCount)
            this.props.toggleIsFetching(false);
            console.log(resp.data)
        })
        this.props.setCurrentPage(+span)
    }
    render() {
        const { trashcats, follow, unfollow, totalCount, pageSize, currentPage, isFetching } = this.props;
        return ( isFetching 
            ? <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh'}}><Grid /></div>
            : <Trashcats
                trashcats={trashcats}
                follow={follow}
                unfollow={unfollow}
                totalCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanges={this.onPageChanges}
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
})(TrashcatsAPIComponent);

export default TrashcatsContainer;