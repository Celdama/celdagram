export const GET_POSTS = 'GET_POSTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_USER_LIKE = 'ADD_USER_LIKE';
export const REMOVE_USER_LIKE = 'REMOVE_USER_LIKE';
export const ADD_POST = 'ADD_POST';

const initialState = [];

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return state;
    case GET_POSTS:
      return [...action.payload];
    case ADD_COMMENT:
      return state.map((post) => {
        return post.id === action.payload.postId
          ? { ...post, comments: [...post.comments, action.payload.data] }
          : post;
      });
    case ADD_USER_LIKE:
      return state.map((post) => {
        return post.id === action.payload.postId
          ? { ...post, likes: [...post.likes, action.payload.data] }
          : post;
      });
    case REMOVE_USER_LIKE:
      return state.map((post) => {
        return post.id === action.payload.postId
          ? {
              ...post,
              likes: post.likes.filter(
                (item) => item.userId !== action.payload.data.userId
              ),
            }
          : post;
      });
    default:
      return state;
  }
};
