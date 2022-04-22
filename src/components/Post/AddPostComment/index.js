import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../../store/selectors/authSelector';
import { addComment } from '../../../store/actions/postsAction';
import { Wrapper, PostBtn } from './addPostComment.style';
import { nanoid } from 'nanoid';

export const AddPostComment = ({ authUser, post, addCommentToFirebase }) => {
  const [formData, setFormData] = useState({
    author: authUser.displayName,
    comment: '',
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
    addCommentToFirebase(
      {
        ...formData,
        uid: nanoid(),
        postId: post.photoId,
      },
      post.photoId
    );
    setFormData({
      author: authUser.displayName,
      comment: '',
    });
  };

  const { comment } = formData;

  return (
    <Wrapper>
      <form>
        <input
          type='text'
          name='comment'
          onChange={handleChange}
          value={comment}
          placeholder='Add a comment...'
        />
        <PostBtn type='button' onClick={handleAddComment}>
          Post
        </PostBtn>
      </form>
    </Wrapper>
  );
};

export const AddPostCommentStore = ({ post }) => {
  const dispatch = useDispatch();
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
    <AddPostComment
      authUser={authUser}
      post={post}
      addCommentToFirebase={addCommentToFirebase}
    />
  );
};
