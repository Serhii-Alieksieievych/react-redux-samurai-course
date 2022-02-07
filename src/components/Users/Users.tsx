import React from "react";
import classes from './Users.module.css';
import avatar from "../../assets/img/avatars/small_ava.jpg"
import { Link } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import { UserType } from "../../types/UsersTypes";
import UserCard from "./UserCard/UserCard";

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
                        <UserCard
                            key={user.id}
                            user={user}
                            follow={follow}
                            unfollow={unfollow}
                            haveFollowingInProgress={haveFollowingInProgress}
                            startNewDialogFromUsersPage={startNewDialogFromUsersPage}
                        />
                    ))
                }
            </ul>
            <Paginator
                totalCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                getUsers={getUsers}
            />
        </div>
    )
}

export default Users;