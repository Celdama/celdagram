import React from 'react';
import { Wrapper } from './profileUserInfo.style';
import { UserAvatar } from '../../UserAvatar';
import { useDispatch } from 'react-redux';
import {
  addFollower,
  addFollowing,
  removeFollowing,
  removeFollower,
} from '../../../store/actions/usersAction';

export const ProfileUserInfo = ({
  authUser,
  currentProfileId,
  userProfile,
  userPosts,
  userLoggedIn,
  handleAddFollowing,
  handleRemoveFollowing,
}) => {
  const socialBtn =
    userLoggedIn &&
    !userLoggedIn.followings.some((e) => e.uid === currentProfileId) ? (
      <button
        onClick={() =>
          handleAddFollowing(userLoggedIn, {
            avatar,
            uid,
            username,
          })
        }
      >
        follow
      </button>
    ) : (
      <button
        onClick={() =>
          handleRemoveFollowing(userLoggedIn, {
            avatar,
            uid,
            username,
          })
        }
      >
        unfollow
      </button>
    );

  const { avatar, uid, username, followers, followings } = userProfile || {};

  return (
    <Wrapper>
      <UserAvatar
        id={userProfile.uid}
        url={avatar}
        name={username}
        size={100}
        displayName={false}
      />
      <div>
        <div className='user'>
          <h4>{userProfile.username}</h4>
          {userProfile !== userLoggedIn && socialBtn}
        </div>
        <div className='social'>
          <span>
            {userPosts.length} photo{userPosts.length > 1 ? 's' : ''}
          </span>
          <span>{followers.length} followers</span>
          <span>{followings.length} following</span>
        </div>
      </div>
    </Wrapper>
  );
};

export const ProfilUserInfoStore = ({
  userProfile,
  userPosts,
  userLoggedIn,
  currentProfileId,
}) => {
  const dispatch = useDispatch();

  const handleAddFollowing = (userLoggedIn, userToFollow) => {
    const { uid, avatar, username } = userLoggedIn;
    dispatch(addFollowing(uid, userToFollow));
    dispatch(
      addFollower(userToFollow.uid, {
        avatar,
        uid,
        username,
      })
    );
  };

  const handleRemoveFollowing = (userLoggedIn, userToUnfollow) => {
    const { uid, avatar, username } = userLoggedIn;

    dispatch(removeFollowing(userLoggedIn.uid, userToUnfollow));
    dispatch(
      removeFollower(userToUnfollow.uid, {
        avatar,
        uid,
        username,
      })
    );
  };

  return (
    <ProfileUserInfo
      userProfile={userProfile}
      userPosts={userPosts}
      userLoggedIn={userLoggedIn}
      handleAddFollowing={handleAddFollowing}
      handleRemoveFollowing={handleRemoveFollowing}
      currentProfileId={currentProfileId}
    />
  );
};
