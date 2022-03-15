import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { GET_POSTS } from '../reducers/postsReducer';

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
