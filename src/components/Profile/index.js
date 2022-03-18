import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addFollowing,
  removeFollowing,
  addFollower,
  removeFollower,
} from '../../store/actions/usersAction';
import { authSelector } from '../../store/selectors/authSelector';
import { postsSelector } from '../../store/selectors/postsSelector';
import { usersSelector } from '../../store/selectors/usersSelector';
import { Wrapper, Photo, UserInfo, UserPhotos } from './profile.style';

export const Profile = ({ users, id, posts, currentUser }) => {
  const dispatch = useDispatch();
  const user = users.filter((user) => user.uid === id)[0];

  const userPosts = posts.filter((post) => post.userId === user.uid);

  const handleAddFollowing = (currentUser, userToFollow) => {
    dispatch(addFollowing(currentUser.uid, userToFollow));
    dispatch(
      addFollower(userToFollow.uid, {
        avatar: currentUser.avatar,
        uid: currentUser.uid,
        username: currentUser.username,
      })
    );
  };

  const handleRemoveFollowing = (currentUser, userToUnfollow) => {
    dispatch(removeFollowing(currentUser.uid, userToUnfollow));
    dispatch(
      removeFollower(userToUnfollow.uid, {
        avatar: currentUser.avatar,
        uid: currentUser.uid,
        username: currentUser.username,
      })
    );
  };

  const socialBtn =
    currentUser && !currentUser.followings.some((e) => e.uid === id) ? (
      <button
        onClick={() =>
          handleAddFollowing(currentUser, {
            avatar: user.avatar,
            uid: user.uid,
            username: user.username,
          })
        }
      >
        follow
      </button>
    ) : (
      <button
        onClick={() =>
          handleRemoveFollowing(currentUser, {
            avatar: user.avatar,
            uid: user.uid,
            username: user.username,
          })
        }
      >
        unfollow
      </button>
    );

  return (
    <Wrapper>
      <UserInfo>
        <img className='avatar' alt='avatar' src={user && user.avatar} />
        <div>
          <div className='user'>
            <h4>{user && user.username}</h4>
            {user !== currentUser && socialBtn}
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
    <Profile users={users} id={id} posts={posts} currentUser={currentUser} />
  );
};
