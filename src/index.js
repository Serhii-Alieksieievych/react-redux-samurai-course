import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, changeCurrentPostArea, sendMessage, changeCurrentMessage } from './Redux/state';
import { subscribe } from './Redux/state';

export const rerenderEntrieTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
            <App
                appState={state}
                addPost={addPost}
                changeCurrentPostArea={changeCurrentPostArea}
                sendMessage={sendMessage}
                changeCurrentMessage={changeCurrentMessage}
            />
          </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );      
}
subscribe(rerenderEntrieTree);
rerenderEntrieTree(state);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
