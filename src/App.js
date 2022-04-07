import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './store/actions/postsAction';
import { getUsers } from './store/actions/usersAction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { NavBarStore } from './layouts/NavBar';
import { Main } from './layouts/Main';
import { HomeStore } from './components/Home';
import { SignUpStore } from './auth/SignUp';
import { monitorAuthState } from './store/actions/authAction';
import { RequireAuth } from './Helpers/requireAuth';
import { LoginStore } from './auth/Login';
import { ProfileStore } from './components/Profile';
import { AddPostStore } from './components/AddPost';
import { TestFilter } from './components/TestFilter';

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
        <NavBarStore />
        <Main>
          <Routes>
            <Route exact path='/' element={<HomeStore />} />
            <Route path='/profile/:id' element={<ProfileStore />} />
            <Route path='/signup' element={<SignUpStore />} />
            <Route path='/login' element={<LoginStore />} />
            <Route path='/new-post' element={<AddPostStore />} />
            <Route path='/test' element={<TestFilter />} />
          </Routes>
        </Main>
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
};
