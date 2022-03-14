import React from 'react';
import { Wrapper } from './cardPhoto.style';

export const CardPhoto = ({ url }) => {
  return (
    <Wrapper>
      <p>user information</p>
      <img src={url} alt='desc' />
      <p>like comments</p>
      <p>2 likes</p>
      <p>list comments</p>
      <p>list comments</p>
      <p>list comments</p>
      <p>add comments</p>
    </Wrapper>
  );
};
