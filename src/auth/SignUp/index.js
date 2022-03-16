import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/actions/authAction';

export const SignUp = ({ registerUserInFirebase }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUserInFirebase(formData.email, formData.password);
      console.log(formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <label>Username</label>
          <input type='text' name='' id='' />
        </div>
        <div>
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
        {/* <div>
          <label>Avatar</label>
          <input type='file' />
        </div> */}
        <button>Sign up</button>
      </form>
    </div>
  );
};

export const SignUpStore = () => {
  const dispatch = useDispatch();

  const registerUserInFirebase = useCallback(
    (emailRegister, passwordRegister) => {
      dispatch(registerUser(emailRegister, passwordRegister));
    },
    [dispatch]
  );

  const test = () => console.log('t');

  return <SignUp registerUserInFirebase={registerUserInFirebase} test={test} />;
};
