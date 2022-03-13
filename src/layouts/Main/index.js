import React from 'react';
import { Wrapper, Content } from './main.style';

export const Main = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};
