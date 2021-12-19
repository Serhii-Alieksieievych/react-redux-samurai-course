import React from "react";
import Dialogs from "./Dialogs";
import { changeNewMessageActionCreator, sendMessageActionCreator } from "../../Redux/dialogs-reducer";
import MyContext from "../../storeContext";

const DialogsContainer = () => {
    
    return (
        <MyContext.Consumer>
            {store => {

                const { dispatch, getState } = store;
                const state = getState();
                const messages = state.dialogsPage.messagesArr;
                const dialogs = state.dialogsPage.dialogsArr;

                const sendMessage = () => {
                    dispatch(sendMessageActionCreator());
                    dispatch(changeNewMessageActionCreator(''));
                }

                const changeMessage = (text) => {
                    dispatch(changeNewMessageActionCreator(text))
                }

                return (<Dialogs
                    sendMessage={sendMessage}
                    changeMessage={changeMessage}
                    messages={messages}
                    dialogs={dialogs}
                />)
            }}
        </MyContext.Consumer>
        
    )
}

export default DialogsContainer;