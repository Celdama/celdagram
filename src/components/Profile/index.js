import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { authSelector } from '../../store/selectors/authSelector';
import { postsSelector } from '../../store/selectors/postsSelector';
import { usersSelector } from '../../store/selectors/usersSelector';
import { Wrapper, Photo, UserPhotos } from './profile.style';
import { ProfilUserInfoStore } from './ProfileUserInfo';

export const Profil = ({
  userProfile,
  currentProfileId,
  posts,
  userLoggedIn,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const userPosts = posts.filter((post) => post.userId === userProfile.uid);

  useEffect(() => {
    if (userProfile) {
      setIsLoaded(true);
    }
  }, [userProfile]);

  return (
    <Wrapper>
      {!isLoaded ? (
        <p>loading</p>
      ) : (
        <>
          <ProfilUserInfoStore
            userProfile={userProfile}
            userPosts={userPosts}
            userLoggedIn={userLoggedIn}
            currentProfileId={currentProfileId}
          />
          <UserPhotos>
            {userPosts.map((post, index) => (
              <Photo key={index} imgUrl={post.photoURL} />
            ))}
          </UserPhotos>
        </>
      )}
    </Wrapper>
  );
};

export const ProfileStore = () => {
  const { id } = useParams();
  const users = useSelector(usersSelector);
  const posts = useSelector(postsSelector);
  const authUser = useSelector(authSelector);

  const userProfile = users.filter((user) => user.uid === id)[0];
  const userLoggedIn = users.filter((user) => user.uid === authUser.uid)[0];

  return (
    <Profil
      userProfile={userProfile}
      currentProfileId={id}
      posts={posts}
      userLoggedIn={userLoggedIn}
    />
  );
};
