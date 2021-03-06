import React from 'react';
import { UserAvatar } from '../UserAvatar';
import { addFollower, addFollowing } from '../../store/actions/usersAction';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../store/selectors/usersSelector';
import { Wrapper, SuggestionsListWrapper, FollowBtn } from './suggestion.style';

export const SuggestionList = ({ authUser, suggestions, currentUser }) => {
  const dispatch = useDispatch();

  const handleAddFollowing = (authUser, userToFollow) => {
    dispatch(addFollowing(authUser.uid, userToFollow));
    dispatch(
      addFollower(userToFollow.uid, {
        avatar: authUser.photoURL,
        uid: authUser.uid,
        username: authUser.displayName,
      })
    );
  };

  const suggestionsList = suggestions.map(({ uid, avatar, username }) => {
    if (!currentUser.followings.some((follow) => follow.uid === uid)) {
      return (
        <div key={uid}>
          <UserAvatar id={uid} url={avatar} name={username} size={40} />
          <FollowBtn
            onClick={() =>
              handleAddFollowing(authUser, {
                avatar,
                uid,
                username,
              })
            }
          >
            Follow
          </FollowBtn>
        </div>
      );
    }
    return null;
  });

  return (
    <Wrapper>
      <h5>Suggestions for you</h5>
      <SuggestionsListWrapper>
        {suggestions && suggestionsList}
      </SuggestionsListWrapper>
    </Wrapper>
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
