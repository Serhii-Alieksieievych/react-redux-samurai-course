import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
    setAuthUserData,
    setSmallAvatar,
    toggleIsFetching,
} from "../../Redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(resp => {
            const isLogged = resp.data.resultCode === 0 ? true : false;
            const { id, login, email} = resp.data.data;
            this.props.setAuthUserData( isLogged, id, email, login)
            return id;
        }).then(id => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(resp => {
                this.props.setSmallAvatar(resp.data.photos.small)
                this.props.toggleIsFetching(false)
            })
        })
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
    }
)(HeaderContainer);