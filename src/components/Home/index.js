import React from 'react';
import { useSelector } from 'react-redux';
import {
  authSelector,
  isAuthSelector,
} from '../../store/selectors/authSelector';
import { usersSelector } from '../../store/selectors/usersSelector';
import { Timeline } from '../Timeline';
import { UserAvatar } from '../UserAvatar';
import { Wrapper, Content, ContentUser } from './home.style';

export const Home = ({ isAuth, authUser, users }) => {
  const suggestionsContent = users.filter((user) => user.uid !== authUser.uid);

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
                  {suggestionsContent &&
                    suggestionsContent.map((suggestion) => {
                      return (
                        <>
                          <UserAvatar
                            id={suggestion.uid}
                            key={suggestion.uid}
                            url={suggestion.avatar}
                            name={suggestion.username}
                            size={30}
                          />
                          <button>Follow</button>
                        </>
                      );
                    })}
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
  const users = useSelector(usersSelector);

  return <Home isAuth={isAuth} authUser={authUser} users={users} />;
};
