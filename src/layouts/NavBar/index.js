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
                <img src={authUser && authUser.photoURL} alt='' />
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
