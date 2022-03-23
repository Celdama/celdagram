import React from 'react';
import { PostStore } from '../Post';

export const VisitorContent = ({ posts }) => {
  return (
    <div>
      {posts &&
        posts.map((post, index) => {
          if (index < 2) {
            return <PostStore key={index} post={post} />;
          } else {
            return null;
          }
        })}
      <p>
        You want to see more post ? Create an account and start to follow
        awesome people
      </p>
    </div>
  );
};
