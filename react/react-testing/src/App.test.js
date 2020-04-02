import React from 'react';
import { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';
import TaskItem from './components/TaskItem';

const mockStore = configureStore();

describe('App', () => {
  it('should match snapshot', () => {
    const store = mockStore({})
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should create a new task', () => {
    const store = mockStore({
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      tasks: [{ id: 1, title: 'tarea 1', done: false }],
    })
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const input = wrapper.find('[data-testid="input-title"]');

    input.simulate('change', {
      target: {
        name: 'title',
        value: 'Tarea 1'
      }
    });

    const form = wrapper.find('[data-testid="task-form"]');
    form.simulate('submit');

    // expect(wrapper.state().tasks).toHaveLength(1);
    // expect(wrapper.state().tasks[0].title).toBe('Tarea 1');

    wrapper.update();

    const tasks = wrapper.find(TaskItem);

    expect(tasks).toHaveLength(1);
  });

  it('should complete task', () => {
    const store = mockStore({
      onChange: jest.fn(),
      onSubmit: jest.fn(),
      onClick: jest.fn(),
      tasks: [{ id: 1, title: 'tarea 1', done: false }],
    });
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const input = wrapper.find('[data-testid="input-title"]');

    input.simulate('change', {
      target: {
        name: 'title',
        value: 'Tarea 1'
      }
    });

    const form = wrapper.find('[data-testid="task-form"]');
    form.simulate('submit');

    input.simulate('change', {
      target: {
        name: 'title',
        value: 'Tarea 2'
      }
    });
    form.simulate('submit');

    wrapper.update();

    const button = wrapper.find('[data-testid="complete-task"]').first();
    button.simulate('click');

    const task = wrapper.find(TaskItem).first();
    expect(task.prop('done')).toBeTruthy();
  });
});
