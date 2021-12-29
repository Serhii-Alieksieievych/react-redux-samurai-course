
import React from "react";
import classes from './Header.module.css';

const LogoutButton = ({ logoutTC }) => {
    return (
        <button onClick={() => { logoutTC() }}>Log out</button>
    )
}

export default LogoutButton;