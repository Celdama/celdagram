import React from 'react';
import { Wrapper } from './postLikesCounter.style';

export const PostLikesCounter = ({ likes }) => {
  return (
    <Wrapper>
      <span>
        {likes.length} like{likes.length > 1 ? 's' : ''}
      </span>
    </Wrapper>
  );
};
