import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postsSelector } from '../../store/selectors/postsSelector';
import { usersSelector } from '../../store/selectors/usersSelector';
import { Wrapper, Photo, UserInfo, UserPhotos } from './profile.style';

export const Profile = ({ users, id, posts }) => {
  const user = users.filter((user) => user.uid === id)[0];

  const userPosts = posts.filter((post) => post.userId === user.uid);

  return (
    <Wrapper>
      <UserInfo>
        <img className='avatar' alt='avatar' src={user && user.avatar} />
        <div>
          <div className='user'>
            <h4>{user && user.username}</h4>
            <button>Follow</button>
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

  return <Profile users={users} id={id} posts={posts} />;
};
