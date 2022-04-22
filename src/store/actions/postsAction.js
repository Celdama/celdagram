import {
  collection,
  getDocs,
  doc,
  arrayUnion,
  updateDoc,
  arrayRemove,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import {
  GET_POSTS,
  ADD_POST,
  ADD_COMMENT,
  ADD_USER_LIKE,
  REMOVE_USER_LIKE,
  DELETE_POST,
  DELETE_COMMENT,
} from '../reducers/postsReducer';

const postsCollectionRef = collection(db, 'posts');

export const addPost = (data) => {
  return async (dispatch) => {
    const date = new Date().toString();
    try {
      await setDoc(doc(db, 'posts', data.photoId), {
        ...data,
        date,
      });
      dispatch({
        type: ADD_POST,
        payload: { ...data, date },
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

export const deleteComment = (data, postId) => {
  return async (dispatch) => {
    console.log(data);
    const postDoc = doc(db, 'posts', postId);
    try {
      await updateDoc(postDoc, {
        comments: arrayRemove(data),
      });
      dispatch({
        type: DELETE_COMMENT,
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

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      await deleteDoc(doc(db, 'posts', postId));
      dispatch({
        type: DELETE_POST,
        payload: {
          postId,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
