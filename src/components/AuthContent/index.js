import React from 'react';
import { PostStore } from '../Post';

export const AuthContent = ({ posts, currentUser }) => {
  const followings = currentUser && currentUser.followings;
  console.log(posts);

  const postsContent =
    followings &&
    posts.filter(
      (post) =>
        followings.some((e) => e.uid === post.userId) ||
        post.userId === currentUser.uid
    );

  return (
    <>
      {postsContent && postsContent.length > 0 ? (
        postsContent.map((post, index) => <PostStore key={index} post={post} />)
      ) : (
        <p>you need to follow someone to see post</p>
      )}
    </>
  );
};
