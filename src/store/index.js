import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './reducers/postsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    posts: postsReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
