import React from 'react';
import { UserAvatar } from '../UserAvatar';

export const SuggestionList = ({ suggestions }) => {
  return (
    <div className='content-user-suggestion'>
      <h5>Suggestions for you</h5>
      <div className='suggestion-user'>
        {suggestions &&
          suggestions.map((suggestion) => {
            return (
              <div key={suggestion.uid}>
                <UserAvatar
                  id={suggestion.uid}
                  url={suggestion.avatar}
                  name={suggestion.username}
                  size={30}
                />
                <button>Follow</button>
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
