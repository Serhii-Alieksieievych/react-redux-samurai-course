
import React from "react";
import classes from './Header.module.css';

type LogoutButtonProps = {
    logoutTC: () => void
}

const LogoutButton :React.FC<LogoutButtonProps> = ({ logoutTC }) => {
    return (
        <button onClick={() => { logoutTC() }}>Log out</button>
    )
}

export default LogoutButton;