import Dialogs from "./Dialogs";
import { changeNewMessageActionCreator, sendMessageActionCreator } from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => (
    {
        messages: state.dialogsPage.messagesArr,
        dialogs: state.dialogsPage.dialogsArr
    }
)

const mapDispatchToProps = (dispatch) => (
        {
            sendMessage: () => {
                dispatch(sendMessageActionCreator());
                dispatch(changeNewMessageActionCreator(''));
            },

            changeMessage: (text) => {
                dispatch(changeNewMessageActionCreator(text))
            }
        }
    )

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;