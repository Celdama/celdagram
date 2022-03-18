export const ADD_USER = 'ADD_USER';
export const GET_USERS = 'GET_USERS';
export const ADD_FOLLOWING = 'ADD_FOLLOWING';

const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...initialState, action.payload];
    case GET_USERS:
      return [...action.payload];
    case ADD_FOLLOWING:
      return state;
    default:
      return state;
  }
};
