import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Posts from './Posts';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const posts = [
  { id: 1, title: 'title', body: 'body' },
  { id: 2, title: 'title', body: 'body' },
  { id: 3, title: 'title', body: 'body' },
];

describe('Posts', () => {
  it('should render a list of 2 posts', () => {
    const store = mockStore({
      getPosts: jest.fn(),
      postsReducer: { posts },
    });

    const wrapper = mount(<Posts store={store} />);

    expect(wrapper.find('.post')).toHaveLength(posts.length);
  });
})
