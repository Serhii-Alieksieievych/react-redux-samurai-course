import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import trashcatsReducer from './trashcats-reducer';
import authReducer from './auth-reducer';
import {reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    trashcatsPage: trashcatsReducer,
    auth: authReducer,
    form: formReducer,
})
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;