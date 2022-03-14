import React from 'react';
import { UserAvatar } from '../UserAvatar';
import { Wrapper } from './cardPhoto.style';

export const CardPhoto = ({ url }) => {
  return (
    <Wrapper>
      <UserAvatar
        url='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        name='John Doe'
        size={40}
      />
      <img className='photo' src={url} alt='desc' />
      <p>like comments</p>
      <p>2 likes</p>
      <p>list comments</p>
      <p>list comments</p>
      <p>list comments</p>
      <p>add comments</p>
    </Wrapper>
  );
};
