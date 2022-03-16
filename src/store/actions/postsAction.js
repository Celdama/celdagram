import {
  collection,
  getDocs,
  doc,
  arrayUnion,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { GET_POSTS, ADD_COMMENTS } from '../reducers/postsReducer';

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
        type: ADD_COMMENTS,
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
