import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = ({ appState, addPost, changeCurrentPostArea, sendMessage, changeCurrentMessage }) => {
  const { dialogsState, profileState} = appState;
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile profileState={profileState} addPost={addPost} changeCurrentPostArea={changeCurrentPostArea}/>}/>
          <Route
            path="/dialogs"
            element={
              <Dialogs
                dialogsState={dialogsState}
                messagesArr={dialogsState.messagesArr}
                sendMessage={sendMessage}
                changeCurrentMessage={changeCurrentMessage}
              />
            }
          />
          <Route path="/news" element={<News />}/>
          <Route path="/music" element={<Music />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
