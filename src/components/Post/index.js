import React from 'react';
import formatDistance from 'date-fns/formatDistance';
import { UserAvatar } from '../UserAvatar';
import {
  Wrapper,
  Photo,
  ContentPost,
  IconsWrapper,
  LikesWrapper,
  CommentsWrapper,
  DateWrapper,
  AddCommentWrapper,
  AvatarWrapper,
} from './post.style';
import { HeartIcon, ChatIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import { refactorDateString } from '../../Helpers/refactorDateString';

export const Post = ({ post }) => {
  const { comments, photoURL } = post;

  const date = formatDistance(new Date(), new Date(post.date.toDate()));

  const commentList = comments.map((comment, index) => {
    return (
      <li key={index}>
        <span className='author'>{comment.author}</span>{' '}
        <span className='comment'>{comment.comment}</span>
      </li>
    );
  });

  return (
    <Wrapper>
      <AvatarWrapper>
        <UserAvatar
          url='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          name='johndoe'
          size={30}
        />
      </AvatarWrapper>
      <Photo className='photo' src={photoURL} alt='pictures' />
      <ContentPost>
        <IconsWrapper>
          {/* <HeartIcon className='icon not-like' /> */}
          <HeartIconSolid className='icon like' />
          <ChatIcon className='icon' />
        </IconsWrapper>
        <LikesWrapper>
          <span>2 likes</span>
        </LikesWrapper>
        <CommentsWrapper>{commentList}</CommentsWrapper>
        <DateWrapper>
          <span>{refactorDateString(date)}</span>
        </DateWrapper>
      </ContentPost>
      <AddCommentWrapper>
        <input type='text' name='' id='' placeholder='Add a comment...' />
        <button>Post</button>
      </AddCommentWrapper>
    </Wrapper>
  );
};
