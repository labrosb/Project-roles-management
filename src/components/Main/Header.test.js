/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Header from './Header';
import { H1 } from './Labels';

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Header title="My Header" />);
});

describe('Header component', () => {
  it('Renders Header Title passed via props correctly', () => {
    const title = wrapper.find(H1).text();

    expect(title).toEqual('My Header');
  });

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
