import React, { Suspense, lazy } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { useEffect } from 'react';
import { useState } from 'react';
import { Grid } from 'svg-loaders-react';
import { checkAutorization } from './Redux/auth-reducer';
import { connect } from 'react-redux';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const Login = lazy(() => import('./components/Login/Login'));

const App = ({ checkAutorization, userId }) => {
  const navigate = useNavigate();
  const [isRedirectedToLogin, setIsRedirectedToLogin] = useState(false);
  const [isInicialized, setIsInicialized] = useState(false)
  useEffect(() => {
    checkAutorization().then(() => {
      setIsInicialized(true)
    })
  }, [userId])
  if (!isInicialized) return <div className="appPreloader" ><Grid /></div>
  if (isInicialized && !userId && !isRedirectedToLogin) {
    setIsRedirectedToLogin(true)
    navigate("/login")
  }
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Suspense fallback={<Grid />}>
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
            path="/users"
            element={
              <UsersContainer />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </Suspense>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userId: state.auth.id,
})

export default connect(mapStateToProps, { checkAutorization })(App);
