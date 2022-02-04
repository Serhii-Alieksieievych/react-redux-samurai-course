import React from "react";
import classes from './Users.module.css';
import userPhoto from "../../assets/img/Opossums.jpg"
import { Link } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import { UserType } from "../../types/UsersTypes";
import { sendMessage } from "../../Redux/dialogs-reducer";

type UsersPropsType = {
    users: Array<UserType>,
    follow: (user: UserType) => void,
    unfollow: (user: UserType) => void,
    totalCount: number,
    pageSize: number,
    currentPage: number,
    getUsers: (currentPage: number) => Promise<void>,
    haveFollowingInProgress: Array<number>,
    startNewDialogFromUsersPage: (id:number)=>Promise<void>,
}

const Users: React.FC<UsersPropsType> = ({
    users,
    follow,
    unfollow,
    totalCount,
    pageSize,
    currentPage,
    getUsers,
    haveFollowingInProgress,
    startNewDialogFromUsersPage,
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
                    users.map((user: UserType) => (
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
                                    disabled={haveFollowingInProgress.some((id: number): boolean => id === user.id)}
                                    className={classes.btn}
                                    onClick={() => {
                                        unfollow(user)
                                    }}
                                >
                                    UNFOLLOW
                                </button>
                                :
                                <button
                                    disabled={haveFollowingInProgress.some((id: number) :boolean => id === user.id)}
                                    className={classes.btn}
                                    onClick={() => {
                                        follow(user)
                                    }}
                                >
                                    FOLLOW
                                </button>
                            }
                            <Link
                                to={`../dialogs/`}
                                className={classes.btn}
                                onClick={() => { startNewDialogFromUsersPage(user.id)}}
                            > START DIALOG </Link>
                            <h3>{user.name}</h3>
                            <p>{user.status}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Users;