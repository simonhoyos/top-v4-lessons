import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import TaskForm from './TaskForm';

const mockStore = configureStore();

describe('TaskForm', () => {
  it('should match snapshot', () => {
    const store = mockStore({})
    const wrapper = mount(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  xit('should change input', () => {
    const onChange = jest.fn();
    const store = mockStore({
      onChange,
      onSubmit: jest.fn(),
      title: ''
    })
    const wrapper = mount(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    );

    const input = wrapper.find('#title');
    input.simulate('change', {
      target: {
        name: 'title',
        value: 'lo que sea'
      }
    });

    expect(onChange).toHaveBeenCalled();
  });
});
