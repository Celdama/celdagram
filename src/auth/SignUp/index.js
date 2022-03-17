import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  monitorAuthState,
  registerUser,
  updateUser,
} from '../../store/actions/authAction';
import { addUser } from '../../store/actions/usersAction';

export const SignUp = ({ registerUserInFirebase }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    avatar: '',
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
    try {
      await registerUserInFirebase(formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input onChange={handleChange} type='text' name='username' />
        </div>
        <div>
          <label>Email</label>
          <input onChange={handleChange} type='email' name='email' />
        </div>
        <div>
          <label>Password</label>
          <input onChange={handleChange} type='password' name='password' />
        </div>
        <div>
          <label>Avatar</label>
          <input onChange={handleChange} type='text' name='avatar' />
        </div>
        <button>Sign up</button>
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
