import React from "react";
import classes from './Header.module.css';

const Header = ( {isLogged, email, id} ) => {
    return (
        <header className={classes.header}>
            <img src="https://key0.cc/images/preview/83810_9affe954e1ae5d956f374d1a3526e6fc.png" alt="logo" className="logo" />
            {isLogged ? <div>{email} You are logged {id}</div> : <div>Log in</div>}
        </header>
    )
}

export default Header;