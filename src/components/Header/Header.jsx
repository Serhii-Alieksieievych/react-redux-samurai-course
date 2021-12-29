import React from "react";
import classes from './Header.module.css';
import userPhoto from "../../assets/img/Opossums.jpg";
import { Grid } from 'svg-loaders-react';
import { Link } from "react-router-dom";

const Header = ({ email, id, smallAvatarSRC, isFetching, logoutTC }) => {
    return (
        <header className={classes.header}>
            <img src="https://key0.cc/images/preview/83810_9affe954e1ae5d956f374d1a3526e6fc.png" alt="logo" className="logo" />
            {isFetching ? <Grid className={classes.preloader} /> : id
                ? <div>
                    {smallAvatarSRC
                        ? <img src={smallAvatarSRC} alt="small_avatar" className={classes.ava} />
                        : <img src={userPhoto} alt="small_avatar" className={classes.ava} />}
                    {email} You are logged {id}
                    <button onClick={() => { logoutTC() }}>Log out</button>
                </div>
                : <Link to="login">Log in</Link>}
        </header>
    )
}

export default Header;
