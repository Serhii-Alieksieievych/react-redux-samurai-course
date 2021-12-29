import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import TrashcatsContainer from './components/Trashcats/TrashcatsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { useState } from 'react';
import { Grid } from 'svg-loaders-react';
import { checkAutorization } from './Redux/auth-reducer';
import { connect } from 'react-redux';

const App = ({checkAutorization, userId}) => {
  const navigate = useNavigate();
  const [isRedirectedToLogin, setIsRedirectedToLogin] = useState(false);

  const [isInicialized, setIsInicialized] = useState(false)
  useEffect(()=>{
    checkAutorization().then(()=>{
      setIsInicialized(true)
      if (!userId) {
        setIsRedirectedToLogin(true)
        navigate("/login")
      }
    })

  }, [userId])
  if (!isInicialized) return <div className="appPreloader" ><Grid /></div>
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
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userId: state.auth.id,
})

export default connect(mapStateToProps, {checkAutorization})(App);
