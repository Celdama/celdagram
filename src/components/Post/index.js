import React from 'react';
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

export const Post = ({ post }) => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <UserAvatar
          url='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          name='johndoe'
          size={30}
        />
      </AvatarWrapper>
      <Photo className='photo' src={post.photoURL} alt='desc' />
      <ContentPost>
        <IconsWrapper>
          {/* <HeartIcon className='icon not-like' /> */}
          <HeartIconSolid className='icon like' />
          <ChatIcon className='icon' />
        </IconsWrapper>
        <LikesWrapper>
          <span>2 likes</span>
        </LikesWrapper>
        <CommentsWrapper>
          {post.comments.map((comment, index) => {
            return (
              <li key={index}>
                <span className='author'>{comment.author}</span>{' '}
                <span className='comment'>{comment.comment}</span>
              </li>
            );
          })}
        </CommentsWrapper>
        <DateWrapper>
          <span>5 month ago</span>
        </DateWrapper>
      </ContentPost>
      <AddCommentWrapper>
        <input type='text' name='' id='' placeholder='Add a comment...' />
        <button>Post</button>
      </AddCommentWrapper>
    </Wrapper>
  );
};
