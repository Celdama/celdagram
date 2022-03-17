import React from 'react';
import { useSelector } from 'react-redux';
import { postsSelector } from '../../store/selectors/postsSelector';

import { PostStore } from '../Post';
import { Wrapper, Content } from './timeline.style';

export const Timeline = ({ posts }) => {
  return (
    <Wrapper>
      <Content>
        {posts &&
          posts.map((post, index) => <PostStore key={index} post={post} />)}
      </Content>
    </Wrapper>
  );
};

export const TimelineStore = () => {
  const posts = useSelector(postsSelector);
  console.log(posts);

  return <Timeline posts={posts} />;
};
