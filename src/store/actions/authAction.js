import { REGISTER_USER } from '../reducers/authReducer';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../config/firebaseConfig';

export const registerUser = (registerEmail, registerPassword) => {
  return async (dispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      dispatch({
        type: REGISTER_USER,
        payload: userCredential.user,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
