import React, { useRef, useState, useCallback, useEffect } from 'react';
import { UploadIcon, XIcon } from '@heroicons/react/outline';
import { Wrapper } from './addPost.style';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../store/selectors/usersSelector';
import { postsSelector } from '../../store/selectors/postsSelector';
import { authSelector } from '../../store/selectors/authSelector';
import { addPost } from '../../store/actions/postsAction';
import { addNewPostId } from '../../store/actions/usersAction';
import { nanoid } from 'nanoid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';

export const AddPost = ({
  currentUser,
  addPostToFirebase,
  addNewPostIdInUserPosts,
}) => {
  const navigate = useNavigate();
  const inputFile = useRef(null);
  const imgPreview = useRef(null);
  const wrapperImg = useRef(null);
  const [previewLoad, setPreviewLoad] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [uploadPhotoImg, setUploadPhotoImg] = useState(false);
  const [postData, setPostData] = useState({
    description: '',
    photoURL: '',
    userId: '',
    likes: [],
    comments: [],
  });

  useEffect(() => {
    if (uploadPhotoImg) {
      addPostToFirebase(postData);
      addNewPostIdInUserPosts(currentUser.uid, postData.photoId);
      setRedirect(!redirect);
    }
  }, [uploadPhotoImg]);

  useEffect(() => {
    if (redirect) {
      return navigate(`/profile/${currentUser.uid}`);
    }
  }, [redirect, navigate]);

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
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      wrapperImg.current.classList.toggle('active');
      setPreviewLoad(!previewLoad);
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target.result;
        imgPreview.current.src = dataURL;
      };
      reader.readAsDataURL(file);
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
          photoURL: url,
          photoId,
          userId: currentUser.uid,
        };
      });
      setUploadPhotoImg(true);
    } catch (err) {
      console.log(err);
    }
  };

  const defaultBtnActive = () => {
    inputFile.current.click();
  };

  const resetPhoto = () => {
    imgPreview.current.src = '';
    setPreviewLoad(!previewLoad);
    wrapperImg.current.classList.toggle('active');
  };
  return (
    <Wrapper>
      <h1>New post</h1>
      <div className='container'>
        <div
          className='wrapper'
          onClick={!previewLoad ? defaultBtnActive : undefined}
          ref={wrapperImg}
        >
          <div className='image'>
            {previewLoad && <img ref={imgPreview} src='' alt='' />}
          </div>
          <div className='content'>
            <div className='icon'>
              <UploadIcon style={{ height: '70px' }} />
            </div>
            <div className='text'>No file chosen, yet.</div>
            <div className='text'>Click to browse.</div>
          </div>
          <div id='cancel-btn' onClick={resetPhoto}>
            <XIcon style={{ height: '16px', padding: '0' }} />
          </div>
        </div>
        <form>
          <input
            ref={inputFile}
            id='default-btn'
            type='file'
            hidden
            onChange={handlePhotoChange}
          />
          <div className='caption'>
            <input
              rows={2}
              placeholder='Write a caption...'
              maxLength='140'
              type='text'
              name='description'
              onChange={handleChange}
            />
            <button type='button' onClick={handleAddPost}>
              Share
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </Wrapper>
  );
};

export const AddPostStore = () => {
  const users = useSelector(usersSelector);
  const posts = useSelector(postsSelector);
  const authUser = useSelector(authSelector);
  const dispatch = useDispatch();

  const currentUser = users.filter((user) => user.uid === authUser.uid)[0];

  const addPostToFirebase = useCallback(
    (data) => {
      dispatch(addPost({ ...data }));
    },
    [dispatch]
  );

  const addNewPostIdInUserPosts = useCallback(
    (currentUserId, postId) => {
      dispatch(addNewPostId(currentUserId, postId));
    },
    [dispatch]
  );

  return (
    <AddPost
      currentUser={currentUser}
      addPostToFirebase={addPostToFirebase}
      addNewPostIdInUserPosts={addNewPostIdInUserPosts}
    />
  );
};
