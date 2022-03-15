import React from 'react';
import { useSelector } from 'react-redux';
import { postsSelector } from '../../store/selectors/postsSelector';

import { Post } from '../Post';
import { Wrapper, Content } from './timeline.style';

export const Timeline = () => {
  const posts = useSelector(postsSelector);

  return (
    <Wrapper>
      <Content>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Content>
    </Wrapper>
  );
};
