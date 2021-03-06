import React, { useCallback } from 'react';
import { Wrapper } from './postCommentsWrapper.style';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../../store/selectors/authSelector';
import { TrashIcon } from '@heroicons/react/solid';
import { deleteComment } from '../../../store/actions/postsAction';
import { Link } from 'react-router-dom';

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

  const slicedCommentsList = comments
    .slice(0, 3)
    .map(({ author, comment, authorId, uid, postId }, index) => {
      return (
        <li key={index}>
          <div>
            <Link to={`/profile/${authorId}`}>
              <span className='author'>{author}</span>{' '}
            </Link>
            <span className='comment'>{comment}</span>
          </div>
          {authorId === authUser.uid && (
            <TrashIcon
              className='icon'
              onClick={() =>
                deleteCommentFromFirebase(
                  {
                    author,
                    comment,
                    authorId,
                    uid,
                    postId,
                  },
                  postId
                )
              }
            />
          )}
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
    (data, postId) => {
      dispatch(deleteComment(data, postId));
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
