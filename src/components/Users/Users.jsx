import React from "react";
import classes from './Users.module.css';
import userPhoto from "../../assets/img/Opossums.jpg"
import { Link } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const users = ({
    users,
    follow,
    unfollow,
    totalCount,
    pageSize,
    currentPage,
    getUsers,
    haveFollowingInProgress,
}) => {

    return (
        <div className={classes.users}>
            <Paginator
                totalCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                getUsers={getUsers}
            />
            <ul className={classes.usersWrapper} >
                {
                    users.map(user => (
                        <li className={classes.userCard} key={user.id}>
                            <Link to={`../profile/${user.id}`}>
                                <img
                                    src={user.photos.small ? user.photos.small : userPhoto}
                                    className={classes.avatar}
                                    alt="User"
                                />
                            </Link>
                            {user.followed
                                ?
                                <button
                                    disabled={haveFollowingInProgress.some(id => id === user.id)}
                                    className={classes.btn}
                                    onClick={() => {
                                        unfollow(user)
                                    }}
                                >
                                    UNFOLLOW
                                </button>
                                :
                                <button
                                    disabled={haveFollowingInProgress.some(id => id === user.id)}
                                    className={classes.btn}
                                    onClick={() => {
                                        follow(user)
                                    }}
                                >
                                    FOLLOW
                                </button>
                            }
                            <h3>{user.name}</h3>
                            <p>{user.status}</p>
                            <p>{user.state}</p>
                            <p>{user.city}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default users;