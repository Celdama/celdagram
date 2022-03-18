import React from 'react';
import { UserAvatar } from '../UserAvatar';
import { toggleFollow } from '../../store/actions/usersAction';
import { useDispatch } from 'react-redux';

export const SuggestionList = ({ authUser, suggestions }) => {
  const dispatch = useDispatch();

  const toggleUserFollow = (authUserId, userId) => {
    dispatch(toggleFollow(authUserId, userId));
  };

  return (
    <div className='content-user-suggestion'>
      <h5>Suggestions for you</h5>
      <div className='suggestion-user'>
        {suggestions &&
          suggestions.map(({ uid, avatar, username }) => {
            return (
              <div key={uid}>
                <UserAvatar id={uid} url={avatar} name={username} size={30} />
                <button
                  onClick={() =>
                    toggleUserFollow(authUser.uid, {
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
          })}
      </div>
    </div>
  );
};

export const SuggestionListStore = ({ authUser, suggestions }) => {
  return <SuggestionList suggestions={suggestions} authUser={authUser} />;
};
