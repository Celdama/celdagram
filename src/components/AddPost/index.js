import React, { useRef, useState, useCallback, useEffect } from 'react';
import { UploadIcon, XIcon } from '@heroicons/react/outline';
import {
  Wrapper,
  Container,
  PreviewUpload,
  PreviewImgContainer,
  PreviewTxtContainer,
  CancelBtnContainer,
  Form,
  ShareBtn,
} from './addPost.style';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../store/selectors/usersSelector';
import { authSelector } from '../../store/selectors/authSelector';
import { addPost, getPosts } from '../../store/actions/postsAction';
import { addNewPostId } from '../../store/actions/usersAction';
import { nanoid } from 'nanoid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../store/actions/usersAction';

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
      return navigate('/');
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
      <Container>
        <PreviewUpload
          onClick={!previewLoad ? defaultBtnActive : undefined}
          ref={wrapperImg}
        >
          <PreviewImgContainer>
            {previewLoad && <img ref={imgPreview} src='' alt='preview post' />}
          </PreviewImgContainer>
          <PreviewTxtContainer>
            <UploadIcon style={{ height: '70px' }} />
            <div>
              <p>No file chosen, yet.</p>
              <p>Click to browse.</p>
            </div>
          </PreviewTxtContainer>
          <CancelBtnContainer id='cancel-btn' onClick={resetPhoto}>
            <XIcon style={{ height: '16px' }} />
          </CancelBtnContainer>
        </PreviewUpload>
        <Form>
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
            <ShareBtn type='button' onClick={handleAddPost}>
              Share
            </ShareBtn>
          </div>
          <div></div>
        </Form>
      </Container>
    </Wrapper>
  );
};

export const AddPostStore = () => {
  const users = useSelector(usersSelector);
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
