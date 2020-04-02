import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import TaskItem from './TaskItem';

const mockStore = configureStore();

describe('TaskItem' , () => {
  it('should match snapshot', () => {
    const store = mockStore({
      tasks: [],
      title: ''
    });
    const title = 'nueva tarea';
    const done = false;
    const wrapper = mount(
      <Provider store={store}>
        <TaskItem
          done={done}
          title={title}
        />
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should show completed task when task is done', () => {
    const store = mockStore({
      tasks: [],
      title: ''
    });
    const title = 'nueva tarea';
    const done = true;
    const wrapper = mount(
      <Provider store={store}>
        <TaskItem
          done={done}
          title={title}
        />
      </Provider>
    );

    expect(wrapper.find('p').text()).toMatch('completada');
  })
});
