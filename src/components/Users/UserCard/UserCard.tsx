import React, { useEffect } from "react";
import classes from './UserCard.module.css';
import avatar from "../../../assets/img/avatars/small_ava.jpg"
import { Link } from "react-router-dom";
import { UserType } from "../../../types/UsersTypes";

let classNames = require('classnames');

type UserCardPropsType = {
    user: UserType,
    follow: (user: UserType) => void,
    unfollow: (user: UserType) => void,
    haveFollowingInProgress: Array<number>,
    startNewDialogFromUsersPage: (id: number) => Promise<void>,
}

const UserCard: React.FC<UserCardPropsType> = ({
    user,
    haveFollowingInProgress,
    unfollow,
    follow,
    startNewDialogFromUsersPage,
}) => {
    useEffect(()=>{},[haveFollowingInProgress])
    return (
        <li className={classes.userCard} key={user.id}>
            <Link to={`../profile/${user.id}`}>
                <img
                    src={user.photos.small || avatar}
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
                    disabled={haveFollowingInProgress.some((id: number): boolean => id === user.id)}
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
                className={classNames(classes.btn, classes.startDialogBtn)}
                onClick={() => { startNewDialogFromUsersPage(user.id) }}
            > START DIALOG </Link>
            <h3>{user.name}</h3>
            <p>{user.status}</p>
        </li>
    )
}

export default UserCard;