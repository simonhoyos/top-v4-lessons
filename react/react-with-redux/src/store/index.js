import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { countReducer } from '../reducers/countReducer';
import { postsReducer } from '../reducers/postsReducer';

function logger(store) {
  return function(next) {
    return function(action) {
      console.log('despachando action: ', action);
      const result = next(action);
      console.log('nuevo estado: ', store.getState());
      return result;
    }
  }
}

const rootReducer = combineReducers({
  countReducer,
  postsReducer,
});
const middlewares = applyMiddleware(logger, thunk);

export const store = createStore(rootReducer, middlewares);
