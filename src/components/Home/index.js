import React from 'react';
import { Timeline } from '../Timeline';
import { UserAvatar } from '../UserAvatar';
import { Wrapper, Content, ContentUser } from './home.style';

export const Home = () => {
  return (
    <Wrapper>
      <Content>
        <Timeline />
        <ContentUser>
          <UserAvatar
            url='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            name='johndoe'
          />
          <div className='content-user-suggestion'>
            <h5>Suggestions</h5>

            <div className='suggestion-user'>
              <UserAvatar
                url='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                size={30}
                name='foofoo'
              />

              <button>follow</button>
            </div>
          </div>
        </ContentUser>
      </Content>
    </Wrapper>
  );
};
