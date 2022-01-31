import { type } from "os";

const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

type SendMessageType = { type: typeof SEND_MESSAGE, payload: string}
type ChangeNewMessageType = { type: typeof CHANGE_NEW_MESSAGE, text: string }
type DialogType = { id: number, name: string }
type MessageType = { id: number, userId: number, message: string }
type InitialStateType = typeof initialState;

export const sendMessage = (payload: string) :SendMessageType=> (
    { type: SEND_MESSAGE, payload }
)
export const changeNewMessage = (text: string) :ChangeNewMessageType => (
    { type: CHANGE_NEW_MESSAGE, text }
)
const initialState = {
    dialogsArr: [
        { id: 1, name: 'Oppos' },
        { id: 2, name: 'Kotossum' },
        { id: 3, name: 'Huhol' },
    ] as Array<DialogType>,

    currentMessage: '',
    messagesArr: [
        { id: 1, userId: 0, message: 'Hi' },
        { id: 2, userId: 1, message: 'Sam hi' },
        { id: 3, userId: 0, message: 'Net ti hi' },
        { id: 4, userId: 1, message: 'Nihuja, ti hi' },
        { id: 5, userId: 0, message: 'Ta ne, tochno ti hi' },
    ] as Array<MessageType>,
};

const dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messagesArr.length + 1,
                userId: 0,
                message: action.payload,
            };
            return { ...state, messagesArr: [...state.messagesArr, newMessage], currentMessage:''};
        case CHANGE_NEW_MESSAGE:
            return {...state, currentMessage: action.text};
        default: 
            return state;
    }
}

export default dialogsReducer;