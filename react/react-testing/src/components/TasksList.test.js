import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import TaskItem from './TaskItem';
import TasksList from './TasksList';

const tasksMock = [
  { id: 0, title: 'tarea 1', done: false },
  { id: 1, title: 'tarea 2', done: true },
  { id: 2, title: 'tarea 3', done: false },
];

const mockStore = configureStore();

describe('TasksList', () => {
  it('should render 3 tasks', () => {
    const store = mockStore({
      tasks: tasksMock
    });

    const wrapper = mount(
      <Provider store={store}>
        <TasksList/>
      </Provider>
    );
    const items = wrapper.find(TaskItem);

    expect(items).toHaveLength(3);
  });
});
