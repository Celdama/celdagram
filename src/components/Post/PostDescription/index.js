import React from 'react';

export const PostDescription = ({ username, desc }) => {
  return (
    <p>
      <span>{username}</span>
      <span>{desc}</span>
    </p>
  );
};
