/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProjectSelector, { Choice } from './ProjectSelector';

configure({ adapter: new Adapter() });

const myProjects = [
  { id: 1, name: 'Project-1' },
  { id: 2, name: 'Project-2' }
];

let wrapper;
beforeEach(() => {
  wrapper = shallow(
    <ProjectSelector projects={myProjects} onSelected={() => null} />
  );
});

describe('Project Selector component', () => {
  it('Renders choices correctly', () => {
    const list = wrapper.find(Choice).children();

    expect(list).toHaveLength(myProjects.length);
  });

  it('Emits project correctly on choice click', () => {
    let projectItem;
    const testFunc = project => { projectItem = project; };

    wrapper.setProps({ onSelected: testFunc });

    const listItem = wrapper.find(Choice).first();

    listItem.simulate('click');

    expect(projectItem).toEqual({ id: 1, name: 'Project-1' });
  });
});
