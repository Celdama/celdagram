import React from 'react';
import { Wrapper, Content } from './navbar.style';
import { HomeIcon, LogoutIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Wrapper>
      <Content className='content'>
        <Link to='/'>Celdagram</Link>
        <ul>
          <Link to='/'>
            <HomeIcon className='icon' />
          </Link>
          <li>
            <LogoutIcon className='icon' />
          </li>
          <Link to='/profile'>
            <img
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
              alt=''
            />
          </Link>
        </ul>
      </Content>
    </Wrapper>
  );
};
