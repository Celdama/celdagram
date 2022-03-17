import { ADD_USER } from '../reducers/usersReducer';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { getAuth } from 'firebase/auth';

const usersCollectionRef = collection(db, 'users');

export const addUser = (data) => {
  return async (dispatch) => {
    try {
      const auth = getAuth();
      const { email, uid, displayName, photoURL } = auth.currentUser;

      await addDoc(usersCollectionRef, {
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
