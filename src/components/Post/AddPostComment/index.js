import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../../store/selectors/authSelector';
import { usersSelector } from '../../../store/selectors/usersSelector';
import { addComment } from '../../../store/actions/postsAction';
import { Wrapper } from './addPostComment.style';

export const AddPostComment = ({ authUser, post, addCommentToFirebase }) => {
  const [formData, setFormData] = useState({
    author: authUser && authUser.displayName,
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
    addCommentToFirebase(formData, post.id);
    setFormData({
      author: authUser && authUser.displayName,
      comment: '',
    });
  };
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export const AddPostCommentStore = ({ post }) => {
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
    <AddPostComment
      authUser={authUser}
      post={post}
      addCommentToFirebase={addCommentToFirebase}
    />
  );
};
