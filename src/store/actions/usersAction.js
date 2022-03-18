import { ADD_USER, GET_USERS, ADD_FOLLOWING } from '../reducers/usersReducer';
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

// INSTEAD TOGGLE FOLLOW
// ONE ACTION TO ADD FOLLOW
// ONE ACTION TO REMOVE FOLLOW
// 2 BUTTON (FOLLOW / UNFOLLOW FOR EACH ACTION)
export const addFollowing = (followerId, following) => {
  return async (dispatch) => {
    const followingsDoc = doc(db, 'users', followerId);
    try {
      await updateDoc(followingsDoc, {
        followings: arrayUnion({ following }),
      });
      dispatch({
        type: ADD_FOLLOWING,
        payload: {},
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
