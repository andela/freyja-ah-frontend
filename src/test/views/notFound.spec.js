import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Notfound from '../../views/NotFound';

const setUp = (props = {}) => {
  const component = shallow(<Notfound {...props} />);
  return component;
};
describe('Notfound component', () => {
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
