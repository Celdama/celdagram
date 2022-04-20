import React from 'react';
import { PostStore } from '../Post';
import { Wrapper } from './visitorContent.style';
import { Link } from 'react-router-dom';

export const VisitorContent = ({ posts }) => {
  return (
    <Wrapper>
      {posts &&
        posts.map((post, index) => {
          if (index < 2) {
            return <PostStore key={index} post={post} />;
          } else {
            return null;
          }
        })}
      <p>
        You want to see more post ? <Link to='/signup'>Sign up</Link> or{' '}
        <Link to='/login'>Login</Link> and start to follow awesome people
      </p>
    </Wrapper>
  );
};
