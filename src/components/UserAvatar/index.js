import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Avatar, Name } from './userAvatar.style';

export const UserAvatar = ({ id, url, name, size = 50 }) => {
  console.log(id);
  return (
    <Wrapper>
      <Link to={`/profile/${id && id}`}>
        <Avatar src={url} alt='avatar' size={size} />
      </Link>
      <Link to={`/profile/${id && id}`}>
        <Name>{name}</Name>
      </Link>
    </Wrapper>
  );
};
