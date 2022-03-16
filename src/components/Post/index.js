import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    author: 'john',
    comment: '',
  });

  const { comment } = formData;

  const { comments, photoURL, likes } = post;

  const date = formatDistance(new Date(), new Date(post.date.toDate()));

  const commentList = comments.map(({ author, comment }, index) => {
    return (
      <li key={index}>
        <span className='author'>{author}</span>{' '}
        <span className='comment'>{comment}</span>
      </li>
    );
  });

  const likesContent = (
    <span>
      {likes.length} like{likes.length > 1 ? 's' : ''}
    </span>
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
          {!!likes.length ? (
            <HeartIconSolid className='icon like' />
          ) : (
            <HeartIcon className='icon not-like' />
          )}
          <ChatIcon className='icon' />
        </IconsWrapper>
        <LikesWrapper>{likesContent}</LikesWrapper>
        <CommentsWrapper>{commentList}</CommentsWrapper>
        <DateWrapper>
          <span>{refactorDateString(date)}</span>
        </DateWrapper>
      </ContentPost>
      <AddCommentWrapper>
        <form onSubmit={handleAddComment}>
          <input
            type='text'
            name='comment'
            onChange={handleChange}
            value={comment}
            placeholder='Add a comment...'
          />
          <button>Post</button>
        </form>
      </AddCommentWrapper>
    </Wrapper>
  );
};
