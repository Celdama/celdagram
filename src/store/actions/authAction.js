import { REGISTER_USER, UPDATE_USER } from '../reducers/authReducer';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

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

export const updateUser = (username, avatar) => {
  const auth = getAuth();
  return async (dispatch) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: avatar,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
