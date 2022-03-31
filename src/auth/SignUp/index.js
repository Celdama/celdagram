import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  monitorAuthState,
  registerUser,
  updateUser,
} from '../../store/actions/authAction';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../store/actions/usersAction';

export const SignUp = ({ registerUserInFirebase }) => {
  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    avatar: '',
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
    await registerUserInFirebase(formData);
    setRedirect(!redirect);
  };

  const { username, email, password, avatar } = formData;

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
          <label>Avatar</label>
          <input
            onChange={handleChange}
            value={avatar}
            type='text'
            name='avatar'
          />
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
    async ({ username, email, password, avatar }) => {
      await dispatch(registerUser(email, password));
      await dispatch(updateUser(username, avatar));
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
