import React from 'react';
import { useSelector } from 'react-redux';
import {
  authSelector,
  isAuthSelector,
} from '../../store/selectors/authSelector';
import { usersSelector } from '../../store/selectors/usersSelector';
import { SuggestionListStore } from '../Suggestion';
import { TimelineStore } from '../Timeline';
import { UserAvatar } from '../UserAvatar';
import { Wrapper, Content, ContentUser } from './home.style';

export const Home = ({ isAuth, authUser, users }) => {
  const suggestionsContent = users.filter((user) => user.uid !== authUser.uid);

  return (
    <Wrapper>
      <Content>
        <TimelineStore />
        <ContentUser>
          {isAuth && (
            <>
              <UserAvatar
                id={authUser && authUser.uid}
                url={authUser && authUser.photoURL}
                name={authUser && authUser.displayName}
              />
              <SuggestionListStore
                authUser={authUser}
                suggestions={suggestionsContent}
              />
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
