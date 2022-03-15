import React from 'react';
import { Wrapper, Photo } from './profile.style';

export const Profile = () => {
  return (
    <Wrapper>
      <div className='user-info'>
        <img
          className='avatar'
          alt='avatar'
          src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        />
        <div>
          <div className='user'>
            <h4>johndoe</h4>
            <button>Follow</button>
          </div>
          <div className='social'>
            <span>5 photos</span>
            <span>1 followers</span>
            <span>0 following</span>
          </div>
          <p className='name'>John Doe from Sweden</p>
        </div>
      </div>
      <div className='photos-container'>
        <Photo urlImg='https://images.unsplash.com/photo-1522439773404-99299bcdad5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
        <Photo urlImg='https://images.unsplash.com/photo-1647185255710-bc523f457ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
        <Photo urlImg='https://images.unsplash.com/photo-1647249935230-11b4bb6dd95e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80' />
        <Photo urlImg='https://images.unsplash.com/photo-1647264002131-7f00ef7a2bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80' />
        <Photo urlImg='https://images.unsplash.com/photo-1647189892164-40f05ebcbefa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80' />
      </div>
    </Wrapper>
  );
};
