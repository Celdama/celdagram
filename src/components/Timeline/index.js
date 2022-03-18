import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/selectors/authSelector';
import { postsSelector } from '../../store/selectors/postsSelector';
import { usersSelector } from '../../store/selectors/usersSelector';

import { PostStore } from '../Post';
import { Wrapper, Content } from './timeline.style';

export const Timeline = ({ posts, currentUser }) => {
  const followings = currentUser && currentUser.followings;

  const postsContent = posts.filter((post) =>
    followings.some((e) => e.uid === post.userId)
  );

  return (
    <Wrapper>
      <Content>
        {postsContent.length > 0 ? (
          postsContent.map((post, index) => (
            <PostStore key={index} post={post} />
          ))
        ) : (
          <p>you need to follow someone to see post</p>
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
