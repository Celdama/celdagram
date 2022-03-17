import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './store/actions/postsAction';
import { getUsers } from './store/actions/usersAction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { NavBar } from './layouts/NavBar';
import { Main } from './layouts/Main';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { SignUpStore } from './auth/SignUp';
import { monitorAuthState } from './store/actions/authAction';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(monitorAuthState());
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signup' element={<SignUpStore />} />
          </Routes>
          {/* <Home /> */}
        </Main>
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
};
