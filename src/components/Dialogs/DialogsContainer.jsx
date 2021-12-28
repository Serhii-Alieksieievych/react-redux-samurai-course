import Dialogs from "./Dialogs";
import { changeNewMessageActionCreator, sendMessageActionCreator } from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => (
    {
        messages: state.dialogsPage.messagesArr,
        dialogs: state.dialogsPage.dialogsArr,
        currentMessage: state.dialogsPage.currentMessage,
    }
)

const mapDispatchToProps = (dispatch) => (
        {
            sendMessage: (message) => {
                dispatch(sendMessageActionCreator(message));
                dispatch(changeNewMessageActionCreator(''));
            },

            changeMessage: (text) => {
                dispatch(changeNewMessageActionCreator(text))
            }
        }
    )

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
