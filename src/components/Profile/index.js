import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postsSelector } from '../../store/selectors/postsSelector';
import { usersSelector } from '../../store/selectors/usersSelector';
import { Wrapper, Photo, UserPhotos, PostWrapper } from './profile.style';
import { ProfileUserInfo } from './ProfileUserInfo';
import { HeartIcon, ChatIcon, TrashIcon } from '@heroicons/react/solid';
import { deletePost } from '../../store/actions/postsAction';
import { authSelector } from '../../store/selectors/authSelector';
import { Modal } from '../Post/Modal';
import { removePostId, getUsers } from '../../store/actions/usersAction';

export const Profil = ({
  userProfile,
  currentProfileId,
  posts,
  deletePostFromFirebase,
  authUserId,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);

  const userPosts = posts.filter((post) => post.userId === userProfile.uid);

  useEffect(() => {
    if (userProfile) {
      setIsLoaded(true);
    }
  }, [userProfile]);

  const handleDeletePost = (id) => {
    deletePostFromFirebase(authUserId, id);
    setIsOpen(false);
  };

  const openModal = (id) => {
    setIsOpen(true);
    setCurrentPostId(id);
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
            {userPosts.map(({ photoId, likes, comments, photoURL, userId }) => (
              <PostWrapper key={photoId}>
                <div className='stats'>
                  <p>
                    <HeartIcon />
                    <span>{likes.length}</span>
                  </p>
                  <p>
                    <ChatIcon />
                    <span>{comments.length}</span>
                  </p>
                  {userId === authUserId && (
                    <p onClick={() => openModal(photoId)}>
                      <TrashIcon className='trash-icon' />
                    </p>
                  )}
                </div>
                <Photo imgUrl={photoURL} />
              </PostWrapper>
            ))}
          </UserPhotos>

          <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
            Are u sure ? u really want to delete this post ?
            <button onClick={() => handleDeletePost(currentPostId)}>
              delete
            </button>
            <button onClick={() => setIsOpen(false)}>cancel</button>
          </Modal>
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
  const dispatch = useDispatch();

  const userProfile = users.filter((user) => user.uid === id)[0];

  const deletePostFromFirebase = useCallback(
    (authUserId, postId) => {
      dispatch(deletePost(postId));
      dispatch(removePostId(authUserId, postId));
    },
    [dispatch]
  );

  return (
    <Profil
      userProfile={userProfile}
      currentProfileId={id}
      posts={posts}
      deletePostFromFirebase={deletePostFromFirebase}
      authUserId={authUser.uid}
    />
  );
};
