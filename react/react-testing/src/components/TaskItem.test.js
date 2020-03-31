import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TaskItem from './TaskItem';

describe('TaskItem' , () => {
  it('should match snapshot', () => {
    const title = 'nueva tarea';
    const done = false;
    const wrapper = shallow(<TaskItem
      done={done}
      title={title}
    />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should show completed task when task is done', () => {
    const title = 'nueva tarea';
    const done = true;
    const wrapper = shallow(<TaskItem
      done={done}
      title={title}
    />);

    expect(wrapper.find('p').text()).toMatch('completada');
  })
});
