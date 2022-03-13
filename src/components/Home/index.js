import React from 'react';
import { Timeline } from '../Timeline';
import { Wrapper, Content, ContentUser } from './home.style';

export const Home = () => {
  return (
    <Wrapper>
      <Content>
        <Timeline />
        <ContentUser>
          <div className='content-user-info'>
            <img
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
              alt='user avatar'
            />
            <h4>John Doe</h4>
          </div>
          <div className='content-user-suggestion'>
            <h5>Suggestions</h5>

            <div className='suggestion-user'>
              <div>
                <img
                  src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                  alt=''
                />
                <p>Foo Foo</p>
              </div>
              <button>follow</button>
            </div>
          </div>
        </ContentUser>
      </Content>
    </Wrapper>
  );
};
