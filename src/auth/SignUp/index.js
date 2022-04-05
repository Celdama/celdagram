import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  monitorAuthState,
  registerUser,
  updateUser,
} from '../../store/actions/authAction';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../store/actions/usersAction';
import { storage } from '../../config/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const SignUp = ({ registerUserInFirebase }) => {
  const [redirect, setRedirect] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      return navigate('/');
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const avatarRef = ref(storage, `${username}-avatar`);

    try {
      await uploadBytes(avatarRef, avatar);
      const url = await getDownloadURL(avatarRef);
      await registerUserInFirebase(formData, url);
    } catch (err) {
      console.log(err);
    }
    setRedirect(!redirect);
  };

  const handleChangeAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  const { username, email, password } = formData;

  return (
    <div>
      <form>
        <div>
          <label>Username</label>
          <input
            onChange={handleChange}
            value={username}
            type='text'
            name='username'
          />
        </div>
        <div>
          <label>Email</label>
          <input
            onChange={handleChange}
            value={email}
            type='email'
            name='email'
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={handleChange}
            value={password}
            type='password'
            name='password'
          />
        </div>
        <div>
          <input type='file' name='avatar' onChange={handleChangeAvatar} />
        </div>
        <button type='button' onClick={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export const SignUpStore = () => {
  const dispatch = useDispatch();

  const registerUserInFirebase = useCallback(
    async ({ username, email, password }, url) => {
      await dispatch(registerUser(email, password));
      await dispatch(updateUser(username, url));
      await dispatch(
        addUser({
          followers: [],
          followings: [],
          likes: [],
          posts: [],
        })
      );
      await dispatch(monitorAuthState());
    },
    [dispatch]
  );

  return <SignUp registerUserInFirebase={registerUserInFirebase} />;
};
