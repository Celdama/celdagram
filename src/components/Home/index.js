import React from 'react';
import { Wrapper, Content, ContentPhotos, ContentUser } from './home.style';

export const Home = () => {
  return (
    <Wrapper>
      <Content>
        <ContentPhotos>photos content</ContentPhotos>
        <ContentUser>user content</ContentUser>
      </Content>
    </Wrapper>
  );
};
