import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import App from './App';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('App' , () => {
  it('should match snapshot', () => {
    const store = mockStore({
      increaseCount: jest.fn(),
      decreaseCount: jest.fn(),
      getPosts: jest.fn(),
      countReducer: { count: 0 },
      postsReducer: { posts: [] },
    });

    const wrapper = mount(
      <Provider store={store}>
        <App store={store} />
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
