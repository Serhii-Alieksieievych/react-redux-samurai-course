import { combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import trashcatsReducer from './trashcats-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    trashcatsPage: trashcatsReducer,
})
const store = createStore(reducers);

export default store;