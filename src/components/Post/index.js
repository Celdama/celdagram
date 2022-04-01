import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatDistance from 'date-fns/formatDistance';
import {
  addComment,
  addUserLike,
  removeUserLike,
} from '../../store/actions/postsAction';
import { addLikedPost, removeLikedPost } from '../../store/actions/usersAction';
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
import { authSelector } from '../../store/selectors/authSelector';

export const Post = ({
  post,
  addLikedPostToFirebase,
  addUserLikeToFirebase,
  addCommentToFirebase,
  removeUserLikeFromFirebase,
  removeLikedPostFromFirebase,
  users,
  authUser,
}) => {
  const [formData, setFormData] = useState({
    author: authUser && authUser.displayName,
    comment: '',
  });

  const currentUser = users.filter((user) => user.uid === authUser.uid)[0];

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
      author: authUser && authUser.displayName,
      comment: '',
    });
  };

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

  const likesIcons =
    currentUser && currentUser.likes.includes(post.id) ? (
      <HeartIconSolid onClick={() => removeLike(post)} className='icon like' />
    ) : (
      <HeartIcon onClick={() => addLike(post)} className='icon not-like' />
    );

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
        {!!authUser.email && (
          <IconsWrapper>
            {likesIcons}
            <ChatIcon className='icon' />
          </IconsWrapper>
        )}
        <LikesWrapper>{likesContent}</LikesWrapper>
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

  return (
    <Post
      addUserLikeToFirebase={addUserLikeToFirebase}
      addLikedPostToFirebase={addLikedPostToFirebase}
      addCommentToFirebase={addCommentToFirebase}
      removeUserLikeFromFirebase={removeUserLikeFromFirebase}
      removeLikedPostFromFirebase={removeLikedPostFromFirebase}
      authUser={authUser}
      post={post}
      users={users}
    />
  );
};
