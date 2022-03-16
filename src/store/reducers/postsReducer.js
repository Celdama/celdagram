export const GET_POSTS = 'GET_POSTS';
export const ADD_COMMENTS = 'ADD_COMMENTS';

const initialState = [];

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.payload];
    case ADD_COMMENTS:
      return state.map((post) => {
        return post.id === action.payload.postId
          ? { ...post, comments: [...post.comments, action.payload.data] }
          : post;
      });
    default:
      return state;
  }
};
