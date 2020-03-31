import React from 'react';
import { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
