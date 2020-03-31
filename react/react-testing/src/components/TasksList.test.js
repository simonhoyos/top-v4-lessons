import React from 'react';
import { shallow } from 'enzyme';
import TaskItem from './TaskItem';
import TasksList from './TasksList';

const tasksMock = [
  { id: 0, title: 'tarea 1', done: false },
  { id: 1, title: 'tarea 2', done: true },
  { id: 2, title: 'tarea 3', done: false },
]

describe('TasksList', () => {
  it('should render 3 tasks', () => {
    const wrapper = shallow(<TasksList tasks={tasksMock} />);
    const items = wrapper.find(TaskItem);

    expect(items).toHaveLength(3);
  });
});
