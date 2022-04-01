import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatDistance from 'date-fns/formatDistance';
import { addComment } from '../../store/actions/postsAction';
import { UserAvatar } from '../UserAvatar';
import {
  Wrapper,
  ContentPost,
  CommentsWrapper,
  DateWrapper,
  AddCommentWrapper,
  AvatarWrapper,
} from './post.style';
import { refactorDateString } from '../../Helpers/refactorDateString';
import { usersSelector } from '../../store/selectors/usersSelector';
import { authSelector } from '../../store/selectors/authSelector';

import { PostPhoto } from './PostPhoto';
import { PostIconsStore } from './PostIcons';
import { PostLikesCounter } from './PostLikesCounter';

export const Post = ({ post, addCommentToFirebase, users, authUser }) => {
  const [formData, setFormData] = useState({
    author: authUser && authUser.displayName,
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
      author: authUser && authUser.displayName,
      comment: '',
    });
  };

  const { uid, avatar, username } = authorPost;

  return (
    <Wrapper>
      <AvatarWrapper>
        {authorPost && (
          <UserAvatar id={uid} url={avatar} name={username} size={30} />
        )}
      </AvatarWrapper>
      <PostPhoto url={photoURL} />
      <ContentPost>
        {authUser.email && <PostIconsStore post={post} />}
        <PostLikesCounter likes={likes} />
        <CommentsWrapper>{commentList}</CommentsWrapper>
        <DateWrapper>
          <span>{refactorDateString(date)}</span>
        </DateWrapper>
      </ContentPost>
      {!!authUser.email && (
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
      )}
    </Wrapper>
  );
};

export const PostStore = ({ post }) => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const authUser = useSelector(authSelector);

  const addCommentToFirebase = useCallback(
    (data, postId) => {
      dispatch(
        addComment(
          {
            authorId: authUser.uid,
            ...data,
          },
          postId
        )
      );
    },
    [dispatch, authUser.uid]
  );

  return (
    <Post
      addCommentToFirebase={addCommentToFirebase}
      authUser={authUser}
      post={post}
      users={users}
    />
  );
};
