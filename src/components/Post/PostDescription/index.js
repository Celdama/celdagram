import React from 'react';
import { Description } from './postDescription.style';

export const PostDescription = ({ username, desc }) => {
  return (
    <Description>
      <span className='author'>{username}</span>
      <span>{desc}</span>
    </Description>
  );
};
