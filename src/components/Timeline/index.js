import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { postsSelector } from '../../store/selectors/postsSelector';

import { CardPhoto } from '../CardPhoto';
import { Wrapper, Content } from './timeline.style';

export const Timeline = () => {
  const posts = useSelector(postsSelector);
  console.log(posts);
  const imgList = [
    'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1646760820822-590b87282813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    'https://images.unsplash.com/photo-1647177501288-13eb2f2f3f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
    'https://images.unsplash.com/photo-1647114579350-5e2b718f8cf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80',
  ];

  return (
    <Wrapper>
      <Content>
        {posts.map((post, index) => (
          <CardPhoto key={index} url={post.photoURL} />
        ))}
      </Content>
    </Wrapper>
  );
};
