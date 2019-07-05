import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navbar from '../../components/navbar/navbar';

const setUp = (props = {}) => {
  const component = shallow(<Navbar {...props} />);
  return component;
};
describe('Navbar component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should render children', () => {
    const wrapper = component.find('Navbar');
    expect(wrapper.find('NavbarBrand').exists()).toBe(true);
    expect(wrapper.find('Collapse').exists()).toBe(true);
    expect(wrapper.find('NavbarToggler').exists()).toBe(true);
    expect(wrapper.find('Nav').exists()).toBe(true);
    expect(wrapper.find('NavItem').exists()).toBe(true);
    expect(wrapper.find('NavLink').exists()).toBe(true);
    expect(wrapper.find('.logo').exists()).toBe(true);
  });
  it('should simulate click', () => {
    const navbar = component.find('Navbar');
    expect(navbar.find('NavbarToggler').simulate('click'));
  });
});
