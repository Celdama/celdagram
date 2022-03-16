import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  monitorAuthState,
  registerUser,
  updateUser,
} from '../../store/actions/authAction';

export const SignUp = ({ registerUserInFirebase, updateUserInFirebase }) => {
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
      await registerUserInFirebase(
        formData.email,
        formData.password,
        formData.username,
        formData.avatar
      );
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
        {/* <div>
          <label>Full name</label>
          <input type='text' name='' id='' />
        </div> */}
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
    async (emailRegister, passwordRegister, username, avatar) => {
      await dispatch(registerUser(emailRegister, passwordRegister));
      await dispatch(updateUser(username, avatar));
      await dispatch(monitorAuthState());
    },
    [dispatch]
  );

  return <SignUp registerUserInFirebase={registerUserInFirebase} />;
};
