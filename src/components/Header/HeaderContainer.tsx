import React from "react";
import { connect } from "react-redux";
import {
    setAuthUserData,
    setSmallAvatar,
    toggleIsFetching,
    logoutTC,
    AuthInitialStateType,
} from "../../Redux/auth-reducer";
import Header from "./Header";
import { checkAutorization } from "../../Redux/auth-reducer";
import { AppStateType } from "../../Redux/redux-store";

type HeaderContainerPropsTypes = {
    toggleIsFetching: (isFetching: boolean) => void;
    checkAutorization: () => void;
    setAuthUserData: (
        isLogged: boolean,
        id: number,
        email: string,
        login: string
    ) => any,
    setSmallAvatar: (smallAvatarSRC: string) => any,
    logoutTC: () => Promise<void>,
    email: string | null,
    id: number | null,
    smallAvatarSRC: string | null,
    isFetching: boolean,
}

class HeaderContainer extends React.Component<HeaderContainerPropsTypes>{
    componentDidMount(){
        this.props.toggleIsFetching(true)
        this.props.checkAutorization()
    }
    render(){
        return(
            <Header 
                email = {this.props.email}
                id = {this.props.id}
                smallAvatarSRC = {this.props.smallAvatarSRC}
                isFetching = {this.props.isFetching}
                logoutTC = {this.props.logoutTC}      
            />
        )
    }
}
const mapStateToProps = (state: AppStateType) :AuthInitialStateType => (
    {...state.auth}
)
    

export default connect(mapStateToProps,
    {
        setAuthUserData,
        setSmallAvatar,
        toggleIsFetching,
        checkAutorization,
        logoutTC,
    }
)(HeaderContainer);