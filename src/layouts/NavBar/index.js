import React from 'react';
import { Wrapper, Content } from './navbar.style';

export const NavBar = () => {
  return (
    <Wrapper className='wrapper'>
      <Content className='content'>
        <span>Celdagram</span>
        <ul>
          <li>Home</li>
          <li>Signout</li>
          <li>Profil</li>
        </ul>
      </Content>
    </Wrapper>
  );
};
