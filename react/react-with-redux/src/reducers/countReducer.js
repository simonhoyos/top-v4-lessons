const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export function increaseCount(data) {
  return function(dispatch) {
    return dispatch({ type: INCREASE, payload: data });
  }
}

export function decreaseCount() {
  return function(dispatch) {
    return dispatch({ type: DECREASE });
  }
}

const initialState = {
  count: 0,
};

export function countReducer(state = initialState, action) {
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
