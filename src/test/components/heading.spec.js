import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Heading } from '../../components/Heading/heading';

const setUp = (props = {}) => {
  const component = shallow(<Heading {...props} title="create an account" />);
  return component;
};
describe('Heading component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should render children', () => {
    const wrapper = component.find('h2');
    expect(wrapper.find('.headsi').exists()).toBe(true);
  });
});