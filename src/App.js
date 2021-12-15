import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const dialogsArr = [
  {id:1, name:'Oppos'},
  {id:2, name:'Kotossum'},
  {id:3, name:'Huhol'},
]

const messagesArr = [
  {id:1, message:'Hi'},
  {id:2, message:'Sam hi'},
  {id:3, message:'Net ti hi'},
  {id:4, message:'Nihuja, ti hi'},
  {id:5, message:'Ta ne, tochno ti hi'},
]

const postsArr = [
  {id:1, message:`post-opost` , likesCount:0},
  {id:2, message:`post-pos`, likesCount:0},
  {id:3, message:`post-opos`, likesCount:0},
]

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile postsArr={postsArr} />}/>
          <Route path="/dialogs" element={<Dialogs dialogsArr={dialogsArr} messagesArr={messagesArr}/>}/>
          <Route path="/news" element={<News />}/>
          <Route path="/music" element={<Music />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
