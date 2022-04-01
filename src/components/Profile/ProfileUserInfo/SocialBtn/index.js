import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../../../store/selectors/authSelector';
import { usersSelector } from '../../../../store/selectors/usersSelector';
import {
  addFollower,
  addFollowing,
  removeFollowing,
  removeFollower,
} from '../../../../store/actions/usersAction';

export const SocialBtn = ({
  userProfile,
  userLoggedIn,
  currentProfileId,
  handleAddFollow,
  handleRemoveFollow,
}) => {
  const { avatar, uid, username } = userProfile || {};

  const userToFollowOrUnfollow = {
    avatar,
    uid,
    username,
  };

  return (
    <div>
      {userLoggedIn &&
      !userLoggedIn.followings.some((e) => e.uid === currentProfileId) ? (
        <button
          onClick={() => handleAddFollow(userLoggedIn, userToFollowOrUnfollow)}
        >
          follow
        </button>
      ) : (
        <button
          onClick={() =>
            handleRemoveFollow(userLoggedIn, userToFollowOrUnfollow)
          }
        >
          unfollow
        </button>
      )}
    </div>
  );
};

export const SocialBtnStore = ({ userProfile, currentProfileId }) => {
  const users = useSelector(usersSelector);
  const authUser = useSelector(authSelector);
  const dispatch = useDispatch();

  const userLoggedIn = users.filter((user) => user.uid === authUser.uid)[0];

  const handleAddFollow = (userLoggedIn, userToFollow) => {
    dispatch(addFollowing(userLoggedIn.uid, userToFollow));
    dispatch(addFollower(userToFollow.uid, userLoggedIn));
  };

  const handleRemoveFollow = (userLoggedIn, userToUnfollow) => {
    dispatch(removeFollowing(userLoggedIn.uid, userToUnfollow));
    dispatch(removeFollower(userToUnfollow.uid, userLoggedIn));
  };

  return (
    <SocialBtn
      userProfile={userProfile}
      userLoggedIn={userLoggedIn}
      currentProfileId={currentProfileId}
      handleAddFollow={handleAddFollow}
      handleRemoveFollow={handleRemoveFollow}
    />
  );
};
