import React from 'react';
import { Wrapper, Content } from './navbar.style';
import { HomeIcon, LogoutIcon } from '@heroicons/react/outline';

export const NavBar = () => {
  return (
    <Wrapper className='wrapper'>
      <Content className='content'>
        <span>Celdagram</span>
        <ul>
          <li>
            <HomeIcon className='icon' />
          </li>
          <li>
            <LogoutIcon className='icon' />
          </li>
          <li>
            <img
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
              alt=''
            />
          </li>
        </ul>
      </Content>
    </Wrapper>
  );
};
