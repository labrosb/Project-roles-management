/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal, { Title } from './Modal';

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  const children = (<div> <p className="child">Child Component</p> </div>);
  wrapper = shallow(<Modal isOpen title="My Title">{children}</Modal>);
});

describe('Modal component', () => {
  it('Renders Modal and checks if title is rendered properly', () => {
    const titleContent = wrapper.find(Title).text();

    expect(titleContent).toEqual('My Title');
  });

  it('It checks if children are rendered properly', () => {
    const childContent = wrapper.find('.child').text();

    expect(childContent).toEqual('Child Component');
  });
});
