const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE, })
export const changeNewMessageActionCreator = (text) => {
    return ({
        type: CHANGE_NEW_MESSAGE,
        text: text,
    })
}
const initialState = {
    dialogsArr: [
        { id: 1, name: 'Oppos' },
        { id: 2, name: 'Kotossum' },
        { id: 3, name: 'Huhol' },
    ],

    currentMessage: '',
    messagesArr: [
        { id: 1, userId: 0, message: 'Hi' },
        { id: 2, userId: 1, message: 'Sam hi' },
        { id: 3, userId: 0, message: 'Net ti hi' },
        { id: 4, userId: 1, message: 'Nihuja, ti hi' },
        { id: 5, userId: 0, message: 'Ta ne, tochno ti hi' },
    ],
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messagesArr.length + 1,
                userId: 0,
                message: state.currentMessage
            };
            return { ...state, messagesArr: [...state.messagesArr, newMessage], currentMessage:''};
        case CHANGE_NEW_MESSAGE:
            return {...state, currentMessage: action.text};
        default: 
            return state;
    }
}

export default dialogsReducer;