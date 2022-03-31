import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInUser } from '../../store/actions/authAction';

export const Login = ({ loginUserInFirebase }) => {
  const [redirect, setRedirect] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      return navigate('/');
    }
  }, [redirect, navigate]);

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
    await loginUserInFirebase(email, password);
    setRedirect(!redirect);
  };

  return (
    <form>
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
          email={password}
          type='password'
          name='password'
        />
      </div>
      <button type='button' onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
};

export const LoginStore = () => {
  const dispatch = useDispatch();

  const loginUserInFirebase = useCallback(
    (emailLogin, passwordLogin) => {
      dispatch(logInUser(emailLogin, passwordLogin));
    },
    [dispatch]
  );

  return <Login loginUserInFirebase={loginUserInFirebase} />;
};
