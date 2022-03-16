import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './reducers/postsReducer';
import { authReducer } from './reducers/authReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    posts: postsReducer,
    auth: authReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
