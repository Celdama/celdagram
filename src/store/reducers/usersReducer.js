export const ADD_USER = 'ADD_USER';
export const GET_USERS = 'GET_USERS';
export const ADD_FOLLOWING = 'ADD_FOLLOWING';
export const REMOVE_FOLLOWING = 'REMOVE_FOLLOWING';
export const ADD_FOLLOWER = 'ADD_FOLLOWER';
export const REMOVE_FOLLOWER = 'REMOVE_FOLLOWER';
export const ADD_LIKED_POST = 'ADD_LIKED_POST';
export const REMOVE_LIKED_POST = 'REMOVE_LIKED_POST';
export const ADD_NEW_POST_ID = 'ADD_NEW_POST_ID';
export const REMOVE_POST_ID = 'REMOVE_POST_ID';

const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...initialState, action.payload];
    case GET_USERS:
      return [...action.payload];
    case ADD_FOLLOWING:
      return state.map((user) => {
        return user.uid === action.payload.followerId
          ? {
              ...user,
              followings: [...user.followings, action.payload.following],
            }
          : user;
      });
    case REMOVE_FOLLOWING:
      return state.map((user) => {
        return user.uid === action.payload.followerId
          ? {
              ...user,
              followings: user.followings.filter(
                (e) => e.uid !== action.payload.following.uid
              ),
            }
          : user;
      });
    case ADD_FOLLOWER:
      return state.map((user) => {
        return user.uid === action.payload.followingId
          ? {
              ...user,
              followers: [...user.followers, action.payload.follower],
            }
          : user;
      });
    case REMOVE_FOLLOWER:
      return state.map((user) => {
        return user.uid === action.payload.followingId
          ? {
              ...user,
              followers: user.followers.filter(
                (e) => e.uid !== action.payload.follower.uid
              ),
            }
          : user;
      });
    case ADD_LIKED_POST:
      return state.map((user) => {
        return user.uid === action.payload.currentUserId
          ? { ...user, likes: [...user.likes, action.payload.postId] }
          : user;
      });
    case REMOVE_LIKED_POST:
      return state.map((user) => {
        return user.uid === action.payload.currentUserId
          ? {
              ...user,
              likes: user.likes.filter(
                (item) => item !== action.payload.postId
              ),
            }
          : user;
      });
    case ADD_NEW_POST_ID:
      return state.map((user) => {
        return user.uid === action.payload.currentUserId
          ? {
              ...user,
              posts: [...user.posts, action.payload.photoId],
            }
          : user;
      });
    case REMOVE_POST_ID:
      return state.map((user) => {
        return user.uid === action.payload.currentUserId
          ? {
              ...user,
              posts: user.posts.filter(
                (item) => item !== action.payload.postId
              ),
            }
          : user;
      });
    default:
      return state;
  }
};
