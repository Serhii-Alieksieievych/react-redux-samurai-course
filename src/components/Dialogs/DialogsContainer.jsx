import Dialogs from "./Dialogs";
import { changeNewMessageActionCreator, sendMessageActionCreator } from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => (
    {
        messages: state.dialogsPage.messagesArr,
        dialogs: state.dialogsPage.dialogsArr,
        currentMessage: state.dialogsPage.currentMessage,
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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(withAuthRedirect(Dialogs))
export default DialogsContainer;