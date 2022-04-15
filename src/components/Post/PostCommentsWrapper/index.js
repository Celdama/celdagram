import React from 'react';
import { Wrapper } from './postCommentsWrapper.style';

export const PostCommentsWrapper = ({ comments, showAllComments }) => {
  const commentsList = comments.map(({ author, comment }, index) => {
    return (
      <li key={index}>
        <span className='author'>{author}</span>
        <span className='comment'>{comment}</span>
      </li>
    );
  });

  const slicedCommentsList = comments
    .slice(0, 3)
    .map(({ author, comment }, index) => {
      return (
        <li key={index}>
          <span className='author'>{author}</span>
          <span className='comment'>{comment}</span>
        </li>
      );
    });

  return (
    <Wrapper>{showAllComments ? commentsList : slicedCommentsList}</Wrapper>
  );
};
