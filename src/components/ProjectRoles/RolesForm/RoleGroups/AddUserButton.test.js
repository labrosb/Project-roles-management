/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import AddUserButton from './AddUserButton';

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(
    <AddUserButton label="add" item="given item" action={() => null} />
  );
});

describe('Add User Button component', () => {
  it('Renders button correctly (matches snapshot)', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Emits action correctly on button click', () => {
    let testValue;
    const testFunc = item => { testValue = item; };

    wrapper.setProps({ action: testFunc });
    wrapper.simulate('click');

    expect(testValue).toEqual('given item');
  });
});
