import React, { useCallback } from 'react';
import { Wrapper, Content } from './navbar.style';
import { HomeIcon, LogoutIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  authSelector,
  isAuthSelector,
} from '../../store/selectors/authSelector';
import { logOutUser } from '../../store/actions/authAction';

export const NavBar = ({ isAuth, authUser, handleLogOut }) => {
  console.log(authUser);
  return (
    <Wrapper>
      <Content className='content'>
        <Link to='/'>Celdagram</Link>
        <ul>
          <Link to='/'>
            <HomeIcon className='icon' />
          </Link>
          {isAuth ? (
            <>
              <li onClick={handleLogOut}>
                <LogoutIcon className='icon' />
              </li>
              <Link to={`/profile/${authUser.uid}`}>
                <img
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                  alt=''
                />
              </Link>
            </>
          ) : (
            <>
              <Link to='/login'>login</Link>
              <Link to='/signup'>Sign up</Link>
            </>
          )}
        </ul>
      </Content>
    </Wrapper>
  );
};

export const NavBarStore = () => {
  const isAuth = useSelector(isAuthSelector);
  const authUser = useSelector(authSelector);
  const dispatch = useDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(logOutUser());
  });

  return (
    <NavBar isAuth={isAuth} authUser={authUser} handleLogOut={handleLogOut} />
  );
};
