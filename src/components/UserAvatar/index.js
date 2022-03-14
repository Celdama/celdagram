import React from 'react';
import { Wrapper, Avatar, Name } from './userAvatar.style';

export const UserAvatar = ({ url, name, size }) => {
  return (
    <Wrapper>
      <Avatar src={url} alt='avatar' size={size} />
      <Name>{name}</Name>
    </Wrapper>
  );
};
