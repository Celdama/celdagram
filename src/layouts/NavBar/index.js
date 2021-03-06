import React, { useCallback } from 'react';
import { Wrapper, Content } from './navbar.style';
import { HomeIcon, LogoutIcon, PlusIcon } from '@heroicons/react/outline';
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
        <Link to='/'>
          <h1>Celdagram</h1>
        </Link>
        <ul>
          {isAuth ? (
            <>
              <Link to='/'>
                <HomeIcon className='icon' />
              </Link>
              <Link to={`/new-post`}>
                <PlusIcon className='icon' />
              </Link>
              <li onClick={handleLogOut}>
                <LogoutIcon className='icon' />
              </li>
              <Link to={`/profile/${authUser.uid}`}>
                <img src={authUser && authUser.photoURL} alt='avatar' />
              </Link>
            </>
          ) : (
            <>
              <Link to='/login'>Log in</Link>
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
  }, [dispatch]);

  return (
    <NavBar isAuth={isAuth} authUser={authUser} handleLogOut={handleLogOut} />
  );
};
