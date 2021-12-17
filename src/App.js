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

const App = ({ store }) => {
  const { dialogsState, profileState } = store.getState();
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profileState={profileState}
                dispatch={store.dispatch.bind(store)}
              />
            }
          />
          <Route
            path="/dialogs"
            element={
              <Dialogs
                dialogsState={dialogsState}
                messagesArr={dialogsState.messagesArr}
                dispatch={store.dispatch.bind(store)}
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
