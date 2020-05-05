/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import UserTag, { RemoveIcon } from './UserTag';

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(
    <UserTag id={1} index={1} name="userName" remove={() => null} />
  );
});

describe('User Tag component', () => {
  it('Renders tag correctly (matches snapshot)', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Executes action with prop parameters on X click', () => {
    let propId;
    let propIndex;
    const testFunc = (id, index) => {
      propId = id;
      propIndex = index;
    };

    wrapper.setProps({ remove: testFunc });

    const exitButton = wrapper.find(RemoveIcon);
    exitButton.simulate('click');

    expect(propIndex).toEqual(1);
    expect(propId).toEqual(1);
  });
});
