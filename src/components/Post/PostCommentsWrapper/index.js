import React from 'react';
import { Wrapper } from './postCommentsWrapper.style';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/selectors/authSelector';
import { TrashIcon } from '@heroicons/react/solid';

export const PostCommentsWrapper = ({
  comments,
  showAllComments,
  authUser,
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

  return (
    <PostCommentsWrapper
      authUser={authUser}
      comments={comments}
      showAllComments={showAllComments}
    />
  );
};
