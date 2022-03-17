import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { usersSelector } from '../../store/selectors/usersSelector';
import { Wrapper, Photo, UserInfo, UserPhotos } from './profile.style';

export const Profile = ({ users, id }) => {
  const user = users.filter((user) => user.uid === id)[0];

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
            <span>5 photos</span>
            <span>1 followers</span>
            <span>0 following</span>
          </div>
        </div>
      </UserInfo>
      <UserPhotos>
        <Photo imgUrl='https://images.unsplash.com/photo-1522439773404-99299bcdad5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
        <Photo imgUrl='https://images.unsplash.com/photo-1647185255710-bc523f457ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
        <Photo imgUrl='https://images.unsplash.com/photo-1647249935230-11b4bb6dd95e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80' />
        <Photo imgUrl='https://images.unsplash.com/photo-1647264002131-7f00ef7a2bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80' />
        <Photo imgUrl='https://images.unsplash.com/photo-1647189892164-40f05ebcbefa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80' />
      </UserPhotos>
    </Wrapper>
  );
};

export const ProfileStore = () => {
  const { id } = useParams();
  const users = useSelector(usersSelector);

  return <Profile users={users} id={id} />;
};
