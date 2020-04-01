import { createStore } from 'redux';

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

function reducer(state, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const initialState = {
  count: 0,
};

export const store = createStore(reducer, initialState);
