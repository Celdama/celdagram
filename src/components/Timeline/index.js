import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/selectors/authSelector';
import { postsSelector } from '../../store/selectors/postsSelector';
import { usersSelector } from '../../store/selectors/usersSelector';

import { PostStore } from '../Post';
import { Wrapper, Content } from './timeline.style';

export const Timeline = ({ posts, authUser, currentUser }) => {
  // console.log(currentUser.followings);
  // console.log(posts.userId);

  const followings = currentUser && currentUser.followings;

  const postsContent = posts.filter((post) =>
    followings.some((e) => e.uid === post.userId)
  );

  console.log(!postsContent);

  return (
    <Wrapper>
      <Content>
        {/* {posts &&
          postsContent.map((post, index) => (
            <PostStore key={index} post={post} />
          ))} */}
        {!postsContent ? (
          postsContent.map((post, index) => (
            <PostStore key={index} post={post} />
          ))
        ) : (
          <p>you need to follow</p>
        )}
      </Content>
    </Wrapper>
  );
};

export const TimelineStore = () => {
  const posts = useSelector(postsSelector);
  const authUser = useSelector(authSelector);
  const users = useSelector(usersSelector);

  const currentUser = users.filter((user) => user.uid === authUser.uid)[0];

  return (
    <Timeline posts={posts} authUser={authUser} currentUser={currentUser} />
  );
};
