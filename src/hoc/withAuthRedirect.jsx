import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {

    const mapStateToProps = (state) => ({
        isAuthorised: state.auth.isLogged,
    })

    return connect(mapStateToProps)((props) => {
        if (!props.isAuthorised) return <Navigate to="/../login" />
        return <Component {...props} />
    })
}

export const withBackAuthRedirect = (Component) => {
    const mapStateToProps = (state) => ({
        userId: state.auth.userId,
    })

    return connect(mapStateToProps)((props) => {
        if (props.userId) return <Navigate to="/../profile/me" />
        return <Component {...props} />
    })
}