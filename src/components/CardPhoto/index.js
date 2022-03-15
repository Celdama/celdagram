import React from 'react';
import { UserAvatar } from '../UserAvatar';
import { Wrapper } from './cardPhoto.style';
import { HeartIcon, ChatIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';

const comments = [
  {
    author: 'johndoe',
    comments: 'My desktop',
  },
  {
    author: 'marshal',
    comments: 'love this place !',
  },
  {
    author: 'orwell',
    comments: 'simplicity',
  },
];

export const CardPhoto = ({ url }) => {
  return (
    <Wrapper>
      <div>
        <UserAvatar
          url='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          name='johndoe'
          size={30}
        />
      </div>
      <img className='photo' src={url} alt='desc' />
      <div className='content-post'>
        <div className='icons-wrapper'>
          {/* <HeartIcon className='icon not-like' /> */}
          <HeartIconSolid className='icon like' />
          <ChatIcon className='icon' />
        </div>
        <div className='likes-wrapper'>
          <p>2 likes</p>
        </div>
        <ul className='comments-wrapper'>
          {comments.map(({ author, comments }, index) => {
            return (
              <li key={index}>
                <span className='author'>{author}</span>{' '}
                <span className='comment'>{comments}</span>
              </li>
            );
          })}
        </ul>
        <div className='date-wrapper'>
          <p>5 month ago</p>
        </div>
      </div>
      <div className='add-comment-wrapper'>
        <input type='text' name='' id='' placeholder='Add a comment...' />
        <button>Post</button>
      </div>
    </Wrapper>
  );
};
