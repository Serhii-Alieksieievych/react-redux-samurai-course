import Dialogs from "./Dialogs";
import { changeNewMessage, sendMessage } from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentMessageSelector, getDialogsSelector, getMessagesSelector } from "../../Redux/dialogs-selectors";

const mapStateToProps = (state) => (
    {
        messages: getMessagesSelector(state),
        dialogs: getDialogsSelector(state),
        currentMessage: getCurrentMessageSelector(state),
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        sendMessage: (message) => {
            dispatch(sendMessage(message));
            dispatch(changeNewMessage(''));
        },

        changeMessage: (text) => {
            dispatch(changeNewMessage(text))
        }
    }
)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
