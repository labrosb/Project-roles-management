/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserList from './index';

configure({ adapter: new Adapter() });

let wrapper;
const list = [{
  id: 1,
  name: 'First user'
}, {
  id: 2,
  name: 'Second user'
}];

beforeEach(() => {
  wrapper = shallow(<UserList list={list} />);
});

describe('User List component', () => {
  it('Renders user tags correctly', () => {
    const users = wrapper.children();

    expect(users).toHaveLength(list.length);
  });
});
