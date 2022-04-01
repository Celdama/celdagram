import React, { useCallback } from 'react';
import { Wrapper } from './postIcons.style';
import { HeartIcon, ChatIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addUserLike,
  removeUserLike,
} from '../../../store/actions/postsAction';
import {
  addLikedPost,
  removeLikedPost,
} from '../../../store/actions/usersAction';
import { usersSelector } from '../../../store/selectors/usersSelector';
import { authSelector } from '../../../store/selectors/authSelector';

export const PostIcons = ({
  currentUser,
  post,
  addUserLikeToFirebase,
  addLikedPostToFirebase,
  removeUserLikeFromFirebase,
  removeLikedPostFromFirebase,
}) => {
  const addLike = (post) => {
    addLikedPostToFirebase(currentUser.uid, post.id);

    const userWhoLike = {
      userId: currentUser.uid,
      username: currentUser.username,
    };
    addUserLikeToFirebase(userWhoLike, post.id);
  };

  const removeLike = (post) => {
    const userWhoDislike = {
      userId: currentUser.uid,
      username: currentUser.username,
    };

    removeUserLikeFromFirebase(userWhoDislike, post.id);
    removeLikedPostFromFirebase(currentUser.uid, post.id);
  };

  const likeIcon =
    currentUser && currentUser.likes.includes(post.id) ? (
      <HeartIconSolid onClick={() => removeLike(post)} className='icon like' />
    ) : (
      <HeartIcon onClick={() => addLike(post)} className='icon not-like' />
    );

  return (
    <Wrapper>
      {likeIcon}
      <ChatIcon className='icon' />
    </Wrapper>
  );
};

export const PostIconsStore = ({ post }) => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const authUser = useSelector(authSelector);

  const addUserLikeToFirebase = useCallback(
    (data, postId) => {
      dispatch(addUserLike(data, postId));
    },
    [dispatch]
  );

  const addLikedPostToFirebase = useCallback(
    (userId, postId) => {
      dispatch(addLikedPost(userId, postId));
    },
    [dispatch]
  );

  const removeUserLikeFromFirebase = useCallback(
    (data, postId) => {
      dispatch(removeUserLike(data, postId));
    },
    [dispatch]
  );

  const removeLikedPostFromFirebase = useCallback(
    (userId, postId) => {
      dispatch(removeLikedPost(userId, postId));
    },
    [dispatch]
  );

  const currentUser = users.filter((user) => user.uid === authUser.uid)[0];

  return (
    <PostIcons
      currentUser={currentUser}
      post={post}
      addUserLikeToFirebase={addUserLikeToFirebase}
      addLikedPostToFirebase={addLikedPostToFirebase}
      removeUserLikeFromFirebase={removeUserLikeFromFirebase}
      removeLikedPostFromFirebase={removeLikedPostFromFirebase}
    />
  );
};
