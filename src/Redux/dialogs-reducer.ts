import { Dispatch } from "redux";
import { dialogsApi } from "../api/api";

const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';
const REFRESH_DIALOGS = 'REFRESH-DIALOGS';
const REFRESH_MESSAGES = 'REFRESH-MESSAGES';
const SET_CURRENT_DIALOG = 'SET-COLLOCUTORS-INFO';
const START_DELETING = 'START-DELETING';
const END_DELETING = 'END-DELETING';
//const SET_NEW_MESSAGES_COUNT = 'SET-NEW-MESSAGES-COUNT';

type StartDeletingType = {type: typeof START_DELETING, id: number}
type EndDeletingType = {type: typeof END_DELETING}
//type SetNewMessagesCountType = {type: typeof SET_NEW_MESSAGES_COUNT, count:number}
type ChangeNewMessageType = { type: typeof CHANGE_NEW_MESSAGE, text: string }
type RefreshDialogsType = { type: typeof REFRESH_DIALOGS, dialogs: Array<DialogType>, newMessagesCount:number }

export const startDeleting = (id: number) :StartDeletingType => ({ type: START_DELETING, id: id})
export const endDeleting = () :EndDeletingType => ({ type: END_DELETING })

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

/*export const setNewMessagesCount = (count: number) :SetNewMessagesCountType => (
    { type:SET_NEW_MESSAGES_COUNT, count }
)*/



const initialState = {
    dialogs: [] as Array<DialogType>,
    currentDialog: null,
    dialogInDeletingProgressId: null,
    currentСollocutorsName: null,
    currentMessage: '',
    messages: { items: [], totalCount: 0, error: null },
    newMessagesCount: 0,
};

export const refreshDialogs = () :any => async (dispatch: Dispatch):Promise<void> => {
    let data = await dialogsApi.getDialogs()
    let newMessagesCount = await dialogsApi.getCountNewMessages()
    dispatch({type: REFRESH_DIALOGS, dialogs: data, newMessagesCount})
}

/*export const refreshNewMessagesCount = (): any => async (dispatch:Dispatch) :Promise<void> => {
    let data = await dialogsApi.getCountNewMessages()
    dispatch(setNewMessagesCount(data))
}*/

export const setMessageToSpam = (id: number, dialog: DialogType) : any => async (dispatch:Dispatch) : Promise<void> => {
    let data =await dialogsApi.setMessageToSpam(id)
    dispatch(refreshMessages(dialog))
}

export const deleteMessage = (id: number, dialog:DialogType) :any => async (dispatch: Dispatch) :Promise<void> => {
    dispatch(startDeleting(id))
    setTimeout(() => {
        dispatch(endDeleting())
    }, 3000);
    let data = await dialogsApi.deleteMessage(id)
    dispatch(refreshMessages(dialog))
}

export const restoreMessage = (id: number, dialog:DialogType) : any => async (dispatch: Dispatch) :Promise<void>=> {
    const data = await dialogsApi.restoreMessage(id);
    dispatch(refreshMessages(dialog))
    dispatch(endDeleting())
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
    let newMessagesCount = await dialogsApi.getCountNewMessages()
    await dispatch({type: REFRESH_MESSAGES, messages: data, newMessagesCount})
    dispatch(refreshDialogs())
}

export const getMessagesNewestThan = (id: number, date:string): any => async (dispatch: Dispatch): Promise<void> => {
    let data = await dialogsApi.getMessagesNewestThan(id, date)
    let newMessagesCount = await dialogsApi.getCountNewMessages()
    await dispatch({ type: REFRESH_MESSAGES, messages: data, newMessagesCount })
}

export const sendMessage = (payload: [DialogType, string]) => async (dispatch:Dispatch) => {
    let data = await dialogsApi.sendMessage(payload[0].id, payload[1])
    await dialogsApi.startChattngWithUser(payload[0].id)
    dispatch(refreshMessages(payload[0]))
}

export const setCurrentDialog=(dialog:DialogType|null)=> {
    return {type: SET_CURRENT_DIALOG, dialog}
}
const dialogsReducer = (state :InitialStateType = initialState, action: any) :InitialStateType => {
    switch (action.type) {
        case START_DELETING:
            return {...state, dialogInDeletingProgressId: action.id}
        case END_DELETING:
            return {...state, dialogInDeletingProgressId: null}
        case REFRESH_DIALOGS:
            return {...state, dialogs: action.dialogs, newMessagesCount: action.newMessagesCount}
        case REFRESH_MESSAGES:
            return { ...state, messages: action.messages, newMessagesCount: action.newMessagesCount}
        case CHANGE_NEW_MESSAGE:
            return {...state, currentMessage: action.text};
        case SET_CURRENT_DIALOG:
            return {...state, currentDialog: action.dialog}
        /*case SET_NEW_MESSAGES_COUNT:
            return {...state, newMessagesCount: action.count}*/
        default: 
            return state;
    }
}

export default dialogsReducer;