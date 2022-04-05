import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInUser } from '../../store/actions/authAction';
import { Wrapper, Content, Form, SubContent } from './login.style';
import { Link } from 'react-router-dom';

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
    <Wrapper>
      <Content>
        <h1>Celdagram</h1>

        <Form>
          <div>
            <input
              onChange={handleChange}
              value={email}
              type='email'
              name='email'
              placeholder='Email adress'
            />
          </div>
          <div>
            <input
              onChange={handleChange}
              email={password}
              type='password'
              name='password'
              placeholder='Password'
            />
          </div>
          <button type='button' onClick={handleSubmit}>
            Login
          </button>
        </Form>
      </Content>
      <SubContent>
        <p>
          Don't have an account ? <Link to='/signup'>Sign up</Link>
        </p>
      </SubContent>
    </Wrapper>
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
