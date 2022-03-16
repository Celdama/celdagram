export const REGISTER_USER = 'REGISTER_USER';

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
