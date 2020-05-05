/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Error from './Error';
import Text from './Main/Text';

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Error header="My Header" message="Error message" />);
});

describe('Error page component', () => {
  it('Renders error message thas is passed via props correctly', () => {
    const errorMessage = wrapper.find(Text).text();

    expect(errorMessage).toEqual('Error message');
  });

  it('Matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
