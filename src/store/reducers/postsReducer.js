export const GET_POSTS = 'GET_POSTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_LIKE = 'ADD_LIKE';

const initialState = [];

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.payload];
    case ADD_COMMENT:
      return state.map((post) => {
        return post.id === action.payload.postId
          ? { ...post, comments: [...post.comments, action.payload.data] }
          : post;
      });
    case ADD_LIKE:
      return state;
    default:
      return state;
  }
};
