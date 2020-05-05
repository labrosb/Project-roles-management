/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Options, { OptionsGroup, Option } from './Options';

configure({ adapter: new Adapter() });

let wrapper;
const list = [{
  label: 'Available',
  options: [{
    value: 'value-1',
    label: 'label-1'
  }, {
    value: 'value-2',
    label: 'label-2'
  }]
}];

beforeEach(() => {
  wrapper = shallow(<Options show data={list} />);
});

describe('Options (GroupSelector) component', () => {
  it('Renders and checks all list options render"', () => {
    const dropdownList = wrapper.find(OptionsGroup);
    // 3 => 1 label + 2 options
    expect(dropdownList.children()).toHaveLength(3);
  });

  it('Executes onSelect action on option click', () => {
    let testValue;
    const testFunc = () => { testValue = 'Executed'; };

    wrapper.setProps({ onSelect: testFunc });

    const option = wrapper.find(Option).first();
    option.simulate('click');

    expect(testValue).toEqual('Executed');
  });
});
