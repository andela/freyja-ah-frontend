import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Modules from '../../views/Modules/modules';

const setUp = (props = {}) => {
  const component = shallow(<Modules {...props} />);
  return component;
};
describe('Modules component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should render children', () => {
    const wrapper = component.find('h2');
    expect(wrapper.exists()).toBe(true);
  });
});
