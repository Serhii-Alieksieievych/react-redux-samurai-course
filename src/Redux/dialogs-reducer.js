const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE, })
export const changeNewMessageActionCreator = (text) => {
    return ({
        type: CHANGE_NEW_MESSAGE,
        text: text,
    })
}

const dialogsReducer = (action, state) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messagesArr.length + 1,
                userId: 0,
                message: state.currentMessage
            };
            state.messagesArr.push(newMessage);
            return state;
        case CHANGE_NEW_MESSAGE:
            state.currentMessage = action.text;
            return state;
        default: return state;
    }
}

export default dialogsReducer;