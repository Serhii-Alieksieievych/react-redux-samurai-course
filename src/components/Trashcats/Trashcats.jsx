import React from "react";
import classes from './Trashcats.module.css';
import userPhoto from "../../assets/img/Opossums.jpg"
import { Link } from "react-router-dom";
import { followAxios, unfollowAxios } from "../../api/api";

const Trashcats = ({
        trashcats,
        follow, 
        unfollow,
        totalCount,
        pageSize,
        currentPage,
        onPageChanges,
        toggleFollowingStatus,
        haveFollowingInProgress,
    }) => {
    const pagesCount = Math.ceil(totalCount / pageSize);
    const pageSpans = [];

    for (let i = 1; i <= pagesCount; i++) {
        pageSpans.push(i)
    }
    return (
        <div className={classes.trashcats}>
            <div className={classes.paginatorWrapper}>
                {pageSpans.map(span => (
                    <span
                        onClick={() => {
                            onPageChanges(span)
                        }}
                        className={span == currentPage
                            ? classes.activePaginator + ' ' + classes.span
                            : classes.span}
                        key={span}
                    >
                        {span}
                    </span>
                ))}

            </div>
            <ul className={classes.trashcatsWrapper} >
                {
                    trashcats.map(trashcat => (
                        <li className={classes.trashcatCard} key={trashcat.id}>
                            <Link to={`../profile/${trashcat.id}`}>
                            <img src={trashcat.photos.small ? trashcat.photos.small : userPhoto} className={classes.avatar} />
                            </Link>
                            {trashcat.followed
                                ?
                                <button
                                    disabled={haveFollowingInProgress.some(id => id === trashcat.id)}
                                    className={classes.btn}
                                    onClick={() => {
                                        toggleFollowingStatus(trashcat.id)
                                        unfollowAxios(trashcat)
                                            .then(data => {
                                                if (data.resultCode == 0) {
                                                    unfollow(trashcat.id)
                                                }
                                                toggleFollowingStatus(trashcat.id)
                                        })
                                    }}
                                >
                                    UNFOLLOW
                                </button>
                                :
                                <button
                                    disabled={haveFollowingInProgress.some(id => id === trashcat.id)}
                                    className={classes.btn}
                                    onClick={() => {
                                        toggleFollowingStatus(trashcat.id)
                                        followAxios(trashcat)
                                            .then(data => {
                                                if (data.resultCode == 0) {
                                                    follow(trashcat.id)
                                                }
                                                toggleFollowingStatus(trashcat.id)
                                            })
                                    }}
                                >
                                    FOLLOW
                                </button>
                            }
                            <h3>{trashcat.name}</h3>
                            <p>{trashcat.status}</p>
                            <p>{trashcat.state}</p>
                            <p>{trashcat.city}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Trashcats;