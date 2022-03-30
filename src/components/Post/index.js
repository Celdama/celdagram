import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatDistance from 'date-fns/formatDistance';
import { addComment, addLike } from '../../store/actions/postsAction';
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
  addLikeToFirebase,
  addCommentToFirebase,
  users,
  authUser,
}) => {
  const [formData, setFormData] = useState({
    author: authUser && authUser.displayName,
    comment: '',
  });

  const currentUser = users.filter((user) => user.uid === authUser.uid)[0];
  // console.log(currentUser.likes);

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
    // console.log(post);
    // 1ere étape : ajouter l'id du post liké dans le tableau des post likés de l'user en question
    const shadowLikesUser = currentUser.likes;
    // shadowLikesUser.push(post.id);
    // console.log(shadowLikesUser);

    // 2eme étape : ajouter les info de l'user dans le tableaux des likes du post en question
    // const shadowPostLikes = post.likes;
    const data = {
      userId: currentUser.uid,
      username: currentUser.username,
    };
    addLikeToFirebase(data, post.id);
    // shadowPostLikes.push({
    //   userId: currentUser.uid,
    //   username: currentUser.username,
    // });
    // console.log(shadowPostLikes);
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
        {!!authUser.email && (
          <IconsWrapper>
            {!!likes.length ? (
              <HeartIconSolid
                onClick={() => addLike(post)}
                className='icon like'
              />
            ) : (
              <HeartIcon
                onClick={() => addLike(post)}
                className='icon not-like'
              />
            )}
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

  const addLikeToFirebase = useCallback(
    (data, postId) => {
      dispatch(addLike(data, postId));
    },
    [dispatch]
  );

  return (
    <Post
      addLikeToFirebase={addLikeToFirebase}
      addCommentToFirebase={addCommentToFirebase}
      authUser={authUser}
      post={post}
      users={users}
    />
  );
};
