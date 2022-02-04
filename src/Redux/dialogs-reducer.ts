import { Dispatch } from "redux";
import { dialogsApi } from "../api/api";

const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';
const REFRESH_DIALOGS = 'REFRESH-DIALOGS';
const REFRESH_MESSAGES = 'REFRESH-MESSAGES';
const SET_CURRENT_DIALOG = 'SET-COLLOCUTORS-INFO';

type ChangeNewMessageType = { type: typeof CHANGE_NEW_MESSAGE, text: string }
type RefreshDialogsType = { type: typeof REFRESH_DIALOGS, dialogs: Array<DialogType> }
export type DialogType = {
    hasNewMessages: boolean,
    id: number,
    lastDialogActivityDate: string,
    lastUserActivityDate: string,
    newMessagesCount: number,
    photos?:{
        small?:string,
        large?:string,
    },
    userName: string,
}
type InitialStateType = typeof initialState;

export const changeNewMessage = (text: string) :ChangeNewMessageType => (
    { type: CHANGE_NEW_MESSAGE, text }
)

const initialState = {
    dialogs: [] as Array<DialogType>,
    currentDialog: {
        hasNewMessages: false,
        id: 1,
        lastDialogActivityDate: 'string',
        lastUserActivityDate: 'string',
        newMessagesCount: 0,
        photos: {
            small: 'string',
            large: 'string',
        },
        userName: 'opps',
    },
    currentСollocutorsName: null,
    currentMessage: '',
    messages: { items: [], totalCount: 0, error: null },
};

export const refreshDialogs = () :any => async (dispatch: Dispatch):Promise<void> => {
    let data = await dialogsApi.getDialogs()
    dispatch({type: REFRESH_DIALOGS, dialogs: data})
}

export const startNewDialogFromUsersPage = (id: number) => async (dispatch: Dispatch): Promise<void> => {
    await dialogsApi.startChattngWithUser(id)
    let data = await dialogsApi.getDialogs()
    let dialog = await data.find((dialog: DialogType)=> dialog.id === id)
    dispatch(setCurrentDialog(dialog))
    dispatch(refreshDialogs())
}

export const refreshMessages = (dialog: DialogType) : any => async (dispatch: Dispatch):Promise<void> => {
    dispatch(setCurrentDialog(dialog))
    let data = await dialogsApi.getMessages(dialog.id)
    await dispatch({type: REFRESH_MESSAGES, messages: data})
    let data2 = await dialogsApi.startChattngWithUser(dialog.id)// Create 429error
    dispatch(refreshDialogs())
}

export const sendMessage = (payload: [DialogType, string]) => async (dispatch:Dispatch) => {
    let data = await dialogsApi.sendMessage(payload[0].id, payload[1])
    dispatch(refreshMessages(payload[0]))
}

export const setCurrentDialog=(dialog:DialogType|null)=> {
    return {type: SET_CURRENT_DIALOG, dialog}
}
const dialogsReducer = (state :InitialStateType = initialState, action: any) :InitialStateType => {
    switch (action.type) {
        case REFRESH_DIALOGS:
            return {...state, dialogs: action.dialogs}
        case REFRESH_MESSAGES:
            return {...state, messages: action.messages}
        case CHANGE_NEW_MESSAGE:
            return {...state, currentMessage: action.text};
        case SET_CURRENT_DIALOG:
            return {...state, currentDialog: action.dialog}
        default: 
            return state;
    }
}

export default dialogsReducer;