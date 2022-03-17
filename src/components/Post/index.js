import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatDistance from 'date-fns/formatDistance';
import { addComment } from '../../store/actions/postsAction';
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
import { usersSelector } from '../../store/selectors/usersSelector';

export const Post = ({ post, addCommentToFirebase, users }) => {
  const [formData, setFormData] = useState({
    author: 'john',
    comment: '',
  });

  const authorPost = users.filter((user) => user.uid === post.userId)[0];

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
    addCommentToFirebase(formData, post.id);
    setFormData({
      author: 'John',
      comment: '',
    });
  };

  return (
    <Wrapper>
      <AvatarWrapper>
        <UserAvatar
          id={authorPost && authorPost.uid}
          url={authorPost && authorPost.avatar}
          name={authorPost && authorPost.username}
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
            value={formData.comment}
            placeholder='Add a comment...'
          />
          <button>Post</button>
        </form>
      </AddCommentWrapper>
    </Wrapper>
  );
};

export const PostStore = ({ post }) => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);

  const addCommentToFirebase = useCallback(
    (data, postId) => {
      dispatch(
        addComment(
          {
            authorId: 'fdsdfdsfs',
            ...data,
          },
          postId
        )
      );
    },
    [dispatch]
  );

  return (
    <Post
      addCommentToFirebase={addCommentToFirebase}
      post={post}
      users={users}
    />
  );
};
