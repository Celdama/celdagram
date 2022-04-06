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
  return userProfile !== userLoggedIn ? (
    <div>
      {userLoggedIn &&
      !userLoggedIn.followings.some((e) => e.uid === currentProfileId) ? (
        <button onClick={() => handleAddFollow(userLoggedIn, userProfile)}>
          follow
        </button>
      ) : (
        <button onClick={() => handleRemoveFollow(userLoggedIn, userProfile)}>
          unfollow
        </button>
      )}
    </div>
  ) : null;
};

export const SocialBtnStore = ({ userProfile, currentProfileId }) => {
  const users = useSelector(usersSelector);
  const authUser = useSelector(authSelector);
  const dispatch = useDispatch();

  const userLoggedIn = users.filter((user) => user.uid === authUser.uid)[0];

  const handleAddFollow = (userLoggedIn, userToFollow) => {
    const { avatar, uid, username } = userToFollow;
    dispatch(
      addFollowing(userLoggedIn.uid, {
        avatar,
        uid,
        username,
      })
    );
    dispatch(
      addFollower(userToFollow.uid, {
        avatar: authUser.photoURL,
        uid: authUser.uid,
        username: authUser.displayName,
      })
    );
  };

  const handleRemoveFollow = (userLoggedIn, userToUnfollow) => {
    dispatch(
      removeFollowing(userLoggedIn.uid, {
        avatar: userToUnfollow.avatar,
        uid: userToUnfollow.uid,
        username: userToUnfollow.username,
      })
    );
    dispatch(
      removeFollower(userToUnfollow.uid, {
        avatar: userLoggedIn.avatar,
        uid: userLoggedIn.uid,
        username: userLoggedIn.username,
      })
    );
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
