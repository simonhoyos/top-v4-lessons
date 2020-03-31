import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TaskForm from './TaskForm';

describe('TaskForm', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<TaskForm />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should change input', () => {
    const handleChange = jest.fn();
    const wrapper = shallow(<TaskForm onChange={handleChange} />);

    const input = wrapper.find('#title');
    input.simulate('change', {
      target: {
        name: 'title',
        value: 'lo que sea'
      }
    });

    expect(handleChange).toHaveBeenCalled();
  });
});
