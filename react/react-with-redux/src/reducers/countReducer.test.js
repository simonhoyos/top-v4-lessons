import configureStore from 'redux-mock-store';
import {
  INCREASE,
  DECREASE,
  increaseCount,
  decreaseCount,
  countReducer,
  initialState,
} from './countReducer';

const mockStore = configureStore();

describe('countReducer', () => {
  it('should return initial state by default', () => {
    const state = countReducer(undefined, { type: 'invalid' });

    expect(state).toMatchObject(initialState);
  });

  it('should increase count by 1', () => {
    const state = countReducer(undefined, { type: INCREASE });

    expect(state.count).toBe(initialState.count + 1);
  });

  it('should decrease count by 1', () => {
    const state = countReducer(undefined, { type: DECREASE });

    expect(state.count).toBe(initialState.count - 1);
  });

  it('should dispatch an INCREASE action', () => {
    const store = mockStore();
    console.log(store)
    const dispatch = store.dispatch;

    increaseCount()(dispatch);

    const actions = store.getActions();

    expect(actions[0].type).toBe(INCREASE);
  });

  it('should dispatch an DECREASE action', () => {
    const store = mockStore();
    const dispatch = store.dispatch;

    decreaseCount()(dispatch);

    const actions = store.getActions();

    expect(actions[0].type).toBe(DECREASE);
  });
});











