import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../store/actions/authAction';

export const LogIn = ({ loginUserInFirebase }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUserInFirebase(formData.email, formData.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input onChange={handleChange} type='email' name='email' />
      </div>
      <div>
        <label>Password</label>
        <input onChange={handleChange} type='password' name='password' />
      </div>
      <button>log in</button>
    </form>
  );
};

export const LogInStore = () => {
  const dispatch = useDispatch();

  const loginUserInFirebase = useCallback(
    (emailLogin, passwordLogin) => {
      dispatch(logInUser(emailLogin, passwordLogin));
    },
    [dispatch]
  );

  return <LogIn loginUserInFirebase={loginUserInFirebase} />;
};
