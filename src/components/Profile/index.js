import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { authSelector } from '../../store/selectors/authSelector';
import { postsSelector } from '../../store/selectors/postsSelector';
import { usersSelector } from '../../store/selectors/usersSelector';
import { Wrapper, Photo, UserInfo, UserPhotos } from './profile.style';

export const Profile = ({ users, id, posts, authUser, currentUser }) => {
  const user = users.filter((user) => user.uid === id)[0];

  const userPosts = posts.filter((post) => post.userId === user.uid);

  const socialBtn =
    currentUser && !currentUser.followings.some((e) => e.uid === id) ? (
      <button>follow</button>
    ) : (
      <button>unfollow</button>
    );

  return (
    <Wrapper>
      <UserInfo>
        <img className='avatar' alt='avatar' src={user && user.avatar} />
        <div>
          <div className='user'>
            <h4>{user && user.username}</h4>
            {socialBtn}
          </div>
          <div className='social'>
            <span>
              {userPosts.length} photo{userPosts.length > 1 ? 's' : ''}
            </span>
            <span>1 followers</span>
            <span>0 following</span>
          </div>
        </div>
      </UserInfo>
      <UserPhotos>
        {userPosts.map((post, index) => (
          <Photo key={index} imgUrl={post.photoURL} />
        ))}
      </UserPhotos>
    </Wrapper>
  );
};

export const ProfileStore = () => {
  const { id } = useParams();
  const users = useSelector(usersSelector);
  const posts = useSelector(postsSelector);
  const authUser = useSelector(authSelector);

  const currentUser = users.filter((user) => user.uid === authUser.uid)[0];

  return (
    <Profile
      users={users}
      id={id}
      posts={posts}
      authUser={authUser}
      currentUser={currentUser}
    />
  );
};
