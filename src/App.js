import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import TrashcatsContainer from './components/Trashcats/TrashcatsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="profile"
          >
            <Route
              path=":userId"
              element={
                <ProfileContainer />
              }
            />
              <Route
                path="me"
                element={
                  <ProfileContainer />
                }
              />
          </Route>
          <Route
            path="/dialogs"
            element={
              <DialogsContainer />
            }
          />
          <Route
            path="/trashcats"
            element={
              <TrashcatsContainer />
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
