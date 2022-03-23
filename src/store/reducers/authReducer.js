export const REGISTER_USER = 'REGISTER_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const MONITOR_AUTH_STATE = 'MONITOR_AUTH_STATE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const initialState = {
  email: '',
  uid: '',
  displayName: '',
  photoURL: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      const { email, uid } = action.payload;
      const registerUser = {
        email,
        uid,
      };

      return { ...state, ...registerUser };
    case UPDATE_USER:
      return state;
    case MONITOR_AUTH_STATE:
      return { ...state, ...action.payload };
    case LOGIN_USER:
      const loginUser = {
        email: action.payload.email,
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
      };
      return { ...state, ...loginUser };
    case LOGOUT_USER:
      return { email: '', uid: '', displayName: '', photoURL: '' };
    default:
      return state;
  }
};
