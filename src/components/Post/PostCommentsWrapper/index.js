import React from 'react';
import { Wrapper } from './postCommentsWrapper.style';

export const PostCommentsWrapper = ({ comments }) => {
  const commentsList = comments.map(({ author, comment }, index) => {
    return (
      <li key={index}>
        <span className='author'>{author}</span>{' '}
        <span className='comment'>{comment}</span>
      </li>
    );
  });

  return <Wrapper>{commentsList}</Wrapper>;
};
