export const ADD_USER = 'ADD_USER';

const initialState = [];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...initialState, ...action.payload];
    default:
      return state;
  }
};
