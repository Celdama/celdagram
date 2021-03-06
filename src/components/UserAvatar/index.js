import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Avatar } from './userAvatar.style';

export const UserAvatar = ({
  id,
  url,
  name,
  size = 50,
  displayName = true,
}) => {
  return (
    <Wrapper>
      <Link to={`/profile/${id}`}>
        <Avatar src={url} alt='avatar' size={size} />
        {displayName && <h4>{name}</h4>}
      </Link>
    </Wrapper>
  );
};
