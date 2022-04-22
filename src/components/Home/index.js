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
  const suggestionsList = users
    .filter(({ uid }) => uid !== authUser.uid)
    .slice(0, 3);

  const { uid, photoURL, displayName } = authUser;

  return (
    <Wrapper>
      <Content>
        <TimelineStore />
        <ContentUser>
          {isAuth && (
            <>
              <UserAvatar id={uid} url={photoURL} name={displayName} />
              <SuggestionListStore
                authUser={authUser}
                suggestions={suggestionsList}
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
