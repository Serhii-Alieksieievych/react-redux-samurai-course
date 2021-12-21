
import { connect } from "react-redux";
import { followActionCreator, setCurrentPageAC, setStateActionCreator, unfollowActionCreator } from "../../Redux/trashcats-reducer";
import axios from "axios";
import React from "react";
import classes from './Trashcats.module.css';
import userPhoto from "../../assets/img/Opossums.jpg";
import Trashcats from "./Trashcats";

class TrashcatsAPIComponent extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(resp => {
            this.props.setTrashcats(resp.data.items, resp.data.totalCount)
        })
    }
    onPageChanges = (span) => {
        {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${span}`).then(resp => {
                this.props.setTrashcats(resp.data.items, resp.data.totalCount)
            })
            this.props.setCurrentPage(+span)

        }
    }
    render() {
        const { trashcats, follow, unfollow, totalCount, pageSize, currentPage } = this.props;
        
        return (
            <Trashcats
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
})

const mapDispatchToProps = (dispatch) => ({
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
    }
})

const TrashcatsContainer = connect(mapStateToProps, mapDispatchToProps)(TrashcatsAPIComponent);

export default TrashcatsContainer;