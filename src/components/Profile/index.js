import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postsSelector } from '../../store/selectors/postsSelector';
import { usersSelector } from '../../store/selectors/usersSelector';
import { Wrapper, Photo, UserPhotos, PostWrapper } from './profile.style';
import { ProfileUserInfo } from './ProfileUserInfo';
import { HeartIcon, ChatIcon } from '@heroicons/react/solid';
import { deletePost } from '../../store/actions/postsAction';

export const Profil = ({
  userProfile,
  currentProfileId,
  posts,
  deletePostFromFirebase,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const userPosts = posts.filter((post) => post.userId === userProfile.uid);

  useEffect(() => {
    if (userProfile) {
      setIsLoaded(true);
    }
  }, [userProfile]);

  const handleDeletePost = (id) => {
    console.log('delete this post', id);
    deletePostFromFirebase(id);
  };

  return (
    <Wrapper>
      {!isLoaded ? (
        <p>loading</p>
      ) : (
        <>
          <ProfileUserInfo
            userProfile={userProfile}
            userPosts={userPosts}
            currentProfileId={currentProfileId}
          />
          <UserPhotos>
            {userPosts.map(({ id, likes, comments, photoURL }) => (
              <PostWrapper key={id}>
                <div className='stats'>
                  <p>
                    <HeartIcon />
                    <span>{likes.length}</span>
                  </p>
                  <p>
                    <ChatIcon />
                    <span>{comments.length}</span>
                  </p>
                  <p onClick={() => handleDeletePost(id)}>delete post</p>
                </div>
                <Photo imgUrl={photoURL} />
              </PostWrapper>
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
  const dispatch = useDispatch();

  const userProfile = users.filter((user) => user.uid === id)[0];

  const deletePostFromFirebase = useCallback(
    (postId) => {
      dispatch(deletePost(postId));
    },
    [dispatch]
  );

  return (
    <Profil
      userProfile={userProfile}
      currentProfileId={id}
      posts={posts}
      deletePostFromFirebase={deletePostFromFirebase}
    />
  );
};
