import {
  REGISTER_USER,
  UPDATE_USER,
  MONITOR_AUTH_STATE,
  LOGIN_USER,
  LOGOUT_USER,
} from '../reducers/authReducer';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
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

export const logInUser = (loginEmail, loginPassword) => {
  return async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      dispatch({
        type: LOGIN_USER,
        payload: userCredential.user,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const updateUser = (username, avatar) => {
  const auth = getAuth();
  console.log(auth);
  return async (dispatch) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: username,
        photoURL: avatar,
      });
      dispatch({
        type: UPDATE_USER,
        payload: {},
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const logOutUser = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch({
        type: LOGOUT_USER,
        payload: {},
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const monitorAuthState = () => {
  return async (dispatch) => {
    try {
      onAuthStateChanged(auth, (user) => {
        let currentUser;
        if (user) {
          const { email, uid, displayName, photoURL } = user.auth.currentUser;
          currentUser = {
            email,
            uid,
            displayName,
            photoURL,
          };
        }
        dispatch({
          type: MONITOR_AUTH_STATE,
          payload: currentUser,
        });
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
