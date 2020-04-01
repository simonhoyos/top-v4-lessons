import React from 'react';
import { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import TaskItem from './components/TaskItem';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should create a new task', () => {
    const wrapper = mount(<App />);
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
    const wrapper = mount(<App />);
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
