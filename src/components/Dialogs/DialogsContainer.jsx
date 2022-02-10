import Dialogs from "./Dialogs";
import {
    changeNewMessage,
    deleteMessage,
    restoreMessage,
    refreshDialogs,
    refreshMessages,
    sendMessage,
    setMessageToSpam,
    getMessagesNewestThan
} from "../../Redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentMessageSelector, getDialogsSelector, getMessagesSelector } from "../../Redux/dialogs-selectors";

const mapStateToProps = (state) => (
    {
        messages: getMessagesSelector(state),
        dialogs: getDialogsSelector(state),
        currentMessage: getCurrentMessageSelector(state),
        currentDialog: state.dialogsPage.currentDialog,
        dialogInDeletingProgressId: state.dialogsPage.dialogInDeletingProgressId,
        newMessagesCount: state.dialogsPage.newMessagesCount,
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        sendMessage: (message) => {
            dispatch(sendMessage(message));
            //dispatch(changeNewMessage(''));
        },

        changeMessage: (text) => {
            dispatch(changeNewMessage(text))
        },

        refreshDialogs: () => {
            dispatch(refreshDialogs())
        },

        refreshMessages: (id) => {
            dispatch(refreshMessages(id))
        },

        deleteMessage: (id, dialog) => {
            dispatch(deleteMessage(id, dialog))
        }
    }
)

export default compose(
    connect(mapStateToProps, {
        sendMessage,
        changeMessage: changeNewMessage,
        refreshDialogs,
        refreshMessages,
        deleteMessage,
        setMessageToSpam,
        restoreMessage,
        getMessagesNewestThan
    }),
    withAuthRedirect
)(Dialogs);
