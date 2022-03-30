import {
  collection,
  getDocs,
  doc,
  arrayUnion,
  updateDoc,
  arrayRemove,
} from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import {
  GET_POSTS,
  ADD_COMMENT,
  ADD_LIKE,
  REMOVE_LIKE,
} from '../reducers/postsReducer';

const postsCollectionRef = collection(db, 'posts');

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

export const addLike = (data, postId) => {
  return async (dispatch) => {
    const postDoc = doc(db, 'posts', postId);
    try {
      await updateDoc(postDoc, {
        likes: arrayUnion(data),
      });
      dispatch({
        type: ADD_LIKE,
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

export const removeLike = (data, postId) => {
  return async (dispatch) => {
    const postDoc = doc(db, 'posts', postId);
    try {
      await updateDoc(postDoc, {
        likes: arrayRemove(data),
      });
      dispatch({
        type: REMOVE_LIKE,
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
