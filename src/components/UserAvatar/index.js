import React from 'react';
import { Wrapper, Avatar, Name } from './userAvatar.style';

export const UserAvatar = ({ url, name }) => {
  return (
    <Wrapper>
      <Avatar src={url} alt='avatar' />
      <Name>{name}</Name>
    </Wrapper>
  );
};
