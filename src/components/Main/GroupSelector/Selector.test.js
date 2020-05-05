/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Selector, { Label } from './Selector';

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Selector />);
});

describe('Selector (GroupSelector) component', () => {
  it('Renders and checks if default value is "Select..."', () => {
    const labelContent = wrapper.find(Label).text();
    expect(labelContent).toEqual('Select...');
  });

  it('Renders with custom default label', () => {
    wrapper.setProps({ placeHolder: 'Alternative' });
    const labelContent = wrapper.find(Label).text();

    expect(labelContent).toEqual('Alternative');
  });
});
