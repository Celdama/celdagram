import React, { useCallback } from 'react';
import { Wrapper } from './postCommentsWrapper.style';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../../store/selectors/authSelector';
import { TrashIcon } from '@heroicons/react/solid';
import { deleteComment } from '../../../store/actions/postsAction';

export const PostCommentsWrapper = ({
  comments,
  showAllComments,
  authUser,
  deleteCommentFromFirebase,
}) => {
  const commentsList = comments.map(({ author, comment }, index) => {
    return (
      <li key={index}>
        <span className='author'>{author}</span>
        <span className='comment'>{comment}</span>
      </li>
    );
  });

  console.log(comments);

  const slicedCommentsList = comments
    .slice(0, 3)
    .map(({ author, comment, authorId }, index) => {
      return (
        <li key={index}>
          <div>
            <span className='author'>{author}</span>{' '}
            <span className='comment'>{comment}</span>
          </div>
          {authorId === authUser.uid && <TrashIcon className='icon' />}
        </li>
      );
    });

  return (
    <Wrapper>{showAllComments ? commentsList : slicedCommentsList}</Wrapper>
  );
};

export const PostCommentsWrapperStore = ({ comments, showAllComments }) => {
  const authUser = useSelector(authSelector);
  const dispatch = useDispatch();

  const deleteCommentFromFirebase = useCallback(
    (commentId) => {
      dispatch(deleteComment(commentId));
    },
    [dispatch]
  );

  return (
    <PostCommentsWrapper
      authUser={authUser}
      comments={comments}
      showAllComments={showAllComments}
      deleteCommentFromFirebase={deleteCommentFromFirebase}
    />
  );
};
