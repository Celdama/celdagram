import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  addFollowing,
  removeFollowing,
  addFollower,
  removeFollower,
} from '../../store/actions/usersAction';
import { authSelector } from '../../store/selectors/authSelector';
import { postsSelector } from '../../store/selectors/postsSelector';
import { usersSelector } from '../../store/selectors/usersSelector';
import { Wrapper, Photo, UserInfo, UserPhotos } from './profile.style';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config/firebaseConfig';
import { nanoid } from 'nanoid';

export const Profile = ({ users, id, posts, currentUser }) => {
  const [photo, setPhoto] = useState(null);
  const [uploadPhotoImg, setUploadPhotoImg] = useState(false);
  const [postData, setPostData] = useState({
    description: '',
    photoUrl: '',
    photoName: '',
    userId: '',
    likes: [],
    comment: [],
  });
  const dispatch = useDispatch();
  const user = users.filter((user) => user.uid === id)[0];

  const userPosts = posts.filter((post) => post.userId === user.uid);

  useEffect(() => {
    if (uploadPhotoImg) {
      console.log('tes');
    }
  }, [uploadPhotoImg]);

  const handleAddFollowing = (currentUser, userToFollow) => {
    const { uid, avatar, username } = currentUser;
    dispatch(addFollowing(uid, userToFollow));
    dispatch(
      addFollower(userToFollow.uid, {
        avatar,
        uid,
        username,
      })
    );
  };

  const handleRemoveFollowing = (currentUser, userToUnfollow) => {
    const { uid, avatar, username } = currentUser;

    dispatch(removeFollowing(currentUser.uid, userToUnfollow));
    dispatch(
      removeFollower(userToUnfollow.uid, {
        avatar,
        uid,
        username,
      })
    );
  };

  const socialBtn =
    currentUser && !currentUser.followings.some((e) => e.uid === id) ? (
      <button
        onClick={() =>
          handleAddFollowing(currentUser, {
            avatar: user.avatar,
            uid: user.uid,
            username: user.username,
          })
        }
      >
        follow
      </button>
    ) : (
      <button
        onClick={() =>
          handleRemoveFollowing(currentUser, {
            avatar: user.avatar,
            uid: user.uid,
            username: user.username,
          })
        }
      >
        unfollow
      </button>
    );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPostData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    const photoId = nanoid();
    const photoRef = ref(storage, `${photoId}-photo`);

    try {
      await uploadBytes(photoRef, photo);
      const url = await getDownloadURL(photoRef);
      setPostData((prevState) => {
        return {
          ...prevState,
          photoUrl: url,
          photoName: `${photoId}-photo`,
          userId: user.uid,
        };
      });
      setUploadPhotoImg(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <UserInfo>
        <img className='avatar' alt='avatar' src={user && user.avatar} />
        <div>
          <div className='user'>
            <h4>{user && user.username}</h4>
            {user !== currentUser && socialBtn}
          </div>
          <div className='social'>
            <span>
              {userPosts.length} photo{userPosts.length > 1 ? 's' : ''}
            </span>
            <span>{user && user.followers.length} followers</span>
            <span>{user && user.followings.length} following</span>
          </div>
        </div>
      </UserInfo>
      <UserPhotos>
        {userPosts.map((post, index) => (
          <Photo key={index} imgUrl={post.photoURL} />
        ))}
      </UserPhotos>
      <form>
        <div>
          <label htmlFor='description'>Description</label>
          <input type='text' name='description' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='photo'>Photo</label>
          <input type='file' name='photo' onChange={handlePhotoChange} />
        </div>
        <div>
          <button type='button' onClick={handleAddPost}>
            Add Post
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export const ProfileStore = () => {
  const { id } = useParams();
  const users = useSelector(usersSelector);
  const posts = useSelector(postsSelector);
  const authUser = useSelector(authSelector);

  const currentUser = users.filter((user) => user.uid === authUser.uid)[0];

  return (
    <Profile users={users} id={id} posts={posts} currentUser={currentUser} />
  );
};
