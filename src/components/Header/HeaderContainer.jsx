import React from "react";
import { connect } from "react-redux";
import {
    setAuthUserData,
    setSmallAvatar,
    toggleIsFetching,
} from "../../Redux/auth-reducer";
import Header from "./Header";
import { checkAutorization } from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.toggleIsFetching(true)
        this.props.checkAutorization()
    }
    render(){
        return(
            <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state) => (
    {...state.auth}
)
    

export default connect(mapStateToProps,
    {
        setAuthUserData,
        setSmallAvatar,
        toggleIsFetching,
        checkAutorization,
    }
)(HeaderContainer);