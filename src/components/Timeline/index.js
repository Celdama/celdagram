import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/selectors/authSelector';
import { postsSelector } from '../../store/selectors/postsSelector';
import { usersSelector } from '../../store/selectors/usersSelector';
import { AuthContent } from '../AuthContent';
import { VisitorContent } from '../VisitorContent';
import { Wrapper, Content } from './timeline.style';

export const Timeline = ({ posts, currentUser }) => {
  return (
    <Wrapper>
      <Content>
        {currentUser ? (
          <AuthContent posts={posts} currentUser={currentUser} />
        ) : (
          <VisitorContent posts={posts} />
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
