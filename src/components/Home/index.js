import React from 'react';
import { useSelector } from 'react-redux';
import {
  authSelector,
  isAuthSelector,
} from '../../store/selectors/authSelector';
import { Timeline } from '../Timeline';
import { UserAvatar } from '../UserAvatar';
import { Wrapper, Content, ContentUser } from './home.style';

export const Home = ({ isAuth, authUser }) => {
  return (
    <Wrapper>
      <Content>
        <Timeline />
        <ContentUser>
          {isAuth && (
            <>
              <UserAvatar
                id={authUser && authUser.uid}
                url={authUser && authUser.photoURL}
                name={authUser && authUser.displayName}
              />
              <div className='content-user-suggestion'>
                <h5>Suggestions for you</h5>
                <div className='suggestion-user'>
                  <UserAvatar
                    url='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
                    size={30}
                    name='foofoo'
                  />

                  <button>Follow</button>
                </div>
              </div>
            </>
          )}
        </ContentUser>
      </Content>
    </Wrapper>
  );
};

export const HomeStore = () => {
  const authUser = useSelector(authSelector);
  const isAuth = useSelector(isAuthSelector);

  return <Home isAuth={isAuth} authUser={authUser} />;
};
