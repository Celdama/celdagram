export const REGISTER_USER = 'REGISTER_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const MONITOR_AUTH_STATE = 'MONITOR_AUTH_STATE';

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, ...action.payload };
    case UPDATE_USER:
      return { ...state };
    case MONITOR_AUTH_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
