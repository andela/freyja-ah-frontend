import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../components/footer/footer';

const setUp = (props = {}) => {
  const component = shallow(<Footer {...props} />);
  return component;
};
describe('Footer component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should render children', () => {
    const wrapper = component.find('footer');
    expect(wrapper.find('ul')).toBeTruthy();
  });
  it('should render an unordered list', () => {
    const list = component.find('ul');
    expect(list.length).toBe(1);
    expect(list.find('li').exists()).toBe(true);
  });
  it('should render an ordered list', () => {
    const list = component.find('li');
    expect(list.length).toBe(3);
    expect(list.find('div').exists()).toBe(true);
  });
  it('should render the div', () => {
    const list = component.find('div');
    expect(list.length).toBe(4);
  });
});
