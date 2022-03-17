import { ADD_USER, GET_USERS, TOGGLE_FOLLOW } from '../reducers/usersReducer';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { getAuth } from 'firebase/auth';

const usersCollectionRef = collection(db, 'users');

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const data = await getDocs(usersCollectionRef);
      const res = data.docs.map((doc) => ({ ...doc.data() }));
      dispatch({
        type: GET_USERS,
        payload: res,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const addUser = (data) => {
  return async (dispatch) => {
    try {
      const auth = getAuth();
      const { email, uid, displayName, photoURL } = auth.currentUser;

      await setDoc(doc(db, 'users', uid), {
        ...data,
        email,
        uid,
        username: displayName,
        avatar: photoURL,
      });

      dispatch({
        type: ADD_USER,
        payload: {
          ...data,
          email,
          uid,
          username: displayName,
          avatar: photoURL,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const toggleFollow = (followerId, followingId) => {
  return async (dispatch) => {
    const followingsDoc = doc(db, 'users', followerId);
    try {
      await updateDoc(followingsDoc, {
        followings: arrayUnion(followingId),
      });
      dispatch({
        type: TOGGLE_FOLLOW,
        payload: {},
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
