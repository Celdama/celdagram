import {
  collection,
  getDocs,
  doc,
  arrayUnion,
  updateDoc,
  arrayRemove,
  addDoc,
  setDoc,
} from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import {
  GET_POSTS,
  ADD_POST,
  ADD_COMMENT,
  ADD_USER_LIKE,
  REMOVE_USER_LIKE,
} from '../reducers/postsReducer';

const postsCollectionRef = collection(db, 'posts');

export const addPost = (data) => {
  // ICI UTILISE L'ID PROVENANT DE LA PHOTO COMME ID DE REFERENCE DANS FIREBASE VOIR setDOc de userAction
  return async (dispatch) => {
    try {
      await setDoc(doc(db, 'posts', data.photoId), {
        ...data,
        date: new Date(),
      });
      dispatch({
        type: ADD_POST,
        payload: { ...data, date: new Date() },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const data = await getDocs(postsCollectionRef);
      const res = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch({
        type: GET_POSTS,
        payload: res,
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const addComment = (data, postId) => {
  return async (dispatch) => {
    const postDoc = doc(db, 'posts', postId);
    try {
      await updateDoc(postDoc, {
        comments: arrayUnion(data),
      });
      dispatch({
        type: ADD_COMMENT,
        payload: {
          data,
          postId,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const addUserLike = (data, postId) => {
  return async (dispatch) => {
    const postDoc = doc(db, 'posts', postId);
    try {
      await updateDoc(postDoc, {
        likes: arrayUnion(data),
      });
      dispatch({
        type: ADD_USER_LIKE,
        payload: {
          data,
          postId,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const removeUserLike = (data, postId) => {
  return async (dispatch) => {
    const postDoc = doc(db, 'posts', postId);
    try {
      await updateDoc(postDoc, {
        likes: arrayRemove(data),
      });
      dispatch({
        type: REMOVE_USER_LIKE,
        payload: {
          data,
          postId,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
