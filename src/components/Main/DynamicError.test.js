/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import DynamicError from './DynamicError';

configure({ adapter: new Adapter() });

describe('Dynamic Error component', () => {
  it('Does not render without show prop passed', () => {
    const wrapper = shallow(<DynamicError message="An Error occured" />);

    expect(wrapper).toEqual({});
  });

  it('Renders currectly (Matches Snapshot) with show and message props', () => {
    const wrapper = shallow(<DynamicError show message="An Error occured" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
