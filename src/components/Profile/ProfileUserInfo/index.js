import React from 'react';
import { Wrapper } from './profileUserInfo.style';
import { UserAvatar } from '../../UserAvatar';
import { SocialBtnStore } from './SocialBtn';

export const ProfileUserInfo = ({
  currentProfileId,
  userProfile,
  userPosts,
}) => {
  const { avatar, username, followers, followings } = userProfile || {};

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
          <h4>{username}</h4>
          <SocialBtnStore
            userProfile={userProfile}
            currentProfileId={currentProfileId}
          />
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
