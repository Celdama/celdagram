import {
  ADD_USER,
  GET_USERS,
  ADD_FOLLOWING,
  REMOVE_FOLLOWING,
  ADD_FOLLOWER,
  REMOVE_FOLLOWER,
  ADD_LIKED_POST,
  REMOVE_LIKED_POST,
  ADD_NEW_POST_ID,
} from '../reducers/usersReducer';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
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

export const addFollowing = (followerId, following) => {
  return async (dispatch) => {
    const followingsDoc = doc(db, 'users', followerId);
    try {
      await updateDoc(followingsDoc, {
        followings: arrayUnion(following),
      });
      dispatch({
        type: ADD_FOLLOWING,
        payload: {
          followerId,
          following,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const removeFollowing = (followerId, following) => {
  return async (dispatch) => {
    const followingsDoc = doc(db, 'users', followerId);
    const { avatar, uid, username } = following;
    try {
      await updateDoc(followingsDoc, {
        followings: arrayRemove({
          avatar,
          uid,
          username,
        }),
      });
      dispatch({
        type: REMOVE_FOLLOWING,
        payload: {
          followerId,
          following,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const addFollower = (followingId, follower) => {
  return async (dispatch) => {
    const followersDoc = doc(db, 'users', followingId);
    try {
      await updateDoc(followersDoc, {
        followers: arrayUnion(follower),
      });
      dispatch({
        type: ADD_FOLLOWER,
        payload: {
          followingId,
          follower,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const removeFollower = (followingId, follower) => {
  return async (dispatch) => {
    const followersDoc = doc(db, 'users', followingId);
    try {
      await updateDoc(followersDoc, {
        followers: arrayRemove(follower),
      });
      dispatch({
        type: REMOVE_FOLLOWER,
        payload: {
          followingId,
          follower,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const addLikedPost = (currentUserId, postId) => {
  console.log(postId);
  return async (dispatch) => {
    const userDoc = doc(db, 'users', currentUserId);
    try {
      await updateDoc(userDoc, {
        likes: arrayUnion(postId),
      });
      dispatch({
        type: ADD_LIKED_POST,
        payload: {
          currentUserId,
          postId,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const removeLikedPost = (currentUserId, postId) => {
  return async (dispatch) => {
    const userDoc = doc(db, 'users', currentUserId);
    try {
      await updateDoc(userDoc, {
        likes: arrayRemove(postId),
      });
      dispatch({
        type: REMOVE_LIKED_POST,
        payload: {
          currentUserId,
          postId,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const addNewPostId = (currentUserId, postId) => {
  return async (dispatch) => {
    const userDoc = doc(db, 'users', currentUserId);
    try {
      await updateDoc(userDoc, {
        posts: arrayUnion(postId),
      });
      dispatch({
        type: ADD_NEW_POST_ID,
        payload: {
          currentUserId,
          postId,
        },
      });
    } catch (err) {
      return console.log(err);
    }
  };
};
