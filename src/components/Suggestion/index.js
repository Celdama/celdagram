import React from 'react';
import { UserAvatar } from '../UserAvatar';
import { addFollowing } from '../../store/actions/usersAction';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../store/selectors/usersSelector';

export const SuggestionList = ({ authUser, suggestions, currentUser }) => {
  const dispatch = useDispatch();

  const handleAddFollowing = (authUserId, userId) => {
    dispatch(addFollowing(authUserId, userId));
  };

  const suggestionsContent = suggestions.map(({ uid, avatar, username }) => {
    if (!currentUser.followings.some((e) => e.uid === uid)) {
      return (
        <div key={uid}>
          <UserAvatar id={uid} url={avatar} name={username} size={30} />
          <button
            onClick={() =>
              handleAddFollowing(authUser.uid, {
                avatar,
                uid,
                username,
              })
            }
          >
            Follow
          </button>
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <div className='content-user-suggestion'>
      <h5>Suggestions for you</h5>
      <div className='suggestion-user'>{suggestions && suggestionsContent}</div>
    </div>
  );
};

export const SuggestionListStore = ({ authUser, suggestions }) => {
  const currentUser = useSelector(usersSelector).filter(
    (user) => user.uid === authUser.uid
  )[0];

  return (
    <SuggestionList
      suggestions={suggestions}
      authUser={authUser}
      currentUser={currentUser}
    />
  );
};
