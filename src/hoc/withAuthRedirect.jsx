import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
    const mapStateToProps = (state) => ({
        userId: state.auth.id,
    })

    return connect(mapStateToProps)((props) => {
        if (!props.userId) return <Navigate replace to="/../login" />
        return <Component {...props} />
    })
}

export const withBackAuthRedirect = (Component) => {
    const mapStateToProps = (state) => ({
        userId: state.auth.id,
    })

    return connect(mapStateToProps)((props) => {
        if (props.userId) return <Navigate replace to="/../profile/me" />
        return <Component {...props} />
    })
}