import React from 'react';
import { UserAvatar } from '../UserAvatar';

export const SuggestionList = ({ suggestions }) => {
  const toggleUserFollow = (userId) => {
    console.log('follow' + userId);
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
                <button onClick={() => toggleUserFollow(uid)}>Follow</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const SuggestionListStore = ({ suggestions }) => {
  return <SuggestionList suggestions={suggestions} />;
};
