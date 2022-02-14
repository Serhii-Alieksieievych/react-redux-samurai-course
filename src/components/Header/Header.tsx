import React from "react";
import classes from './Header.module.css';
import userPhoto from "../../assets/img/Opossums.jpg";
import { Link } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import logo from "../../assets/img/logo.jpg"

type PropsType = {
    email: string | null,
    id: number | null,
    smallAvatarSRC: string | null,
    isFetching: boolean,
    logoutTC: ()=>void
}

const Header :React.FC<PropsType> = ({ email, id, smallAvatarSRC, isFetching, logoutTC }) => {
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo" className="logo" />
            {isFetching ? <Preloader size="50" color="black"/> : id
                ? <div className={classes.userInfo}>
                    <div className={classes.userInfoText}>
                        <span>You are logged</span>
                        <span>{email}</span>
                    </div>
                    <button onClick={() => { logoutTC() }} className={classes.button}>Log out</button>
                    {smallAvatarSRC
                        ? <img src={smallAvatarSRC} alt="small_avatar" className={classes.ava} />
                        : <img src={userPhoto} alt="small_avatar" className={classes.ava} />}
                </div>
                : <Link to="login" className={classes.button}>Log in</Link>}
        </header>
    )
}

export default Header;
