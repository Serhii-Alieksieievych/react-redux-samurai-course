import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    auth: authReducer,
    form: formReducer,
})
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;