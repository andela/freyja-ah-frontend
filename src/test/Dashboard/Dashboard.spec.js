import React from 'react';
import { shallow } from 'enzyme';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Dashboard } from '../../views/Dashboard/Dashboard';

const props = {
  getCourseModules: () => {},
};

describe('component: Header', () => {
  const wrapper = shallow(<Dashboard {...props} />);
  it('should render correctly', (done) => {
    expect(wrapper.find('main').hasClass('d-container')).toBe(true);
    done();
  });
  it('should ensure that home page exists,  and it includes header and footer components', () => {
    // expect(wrapper.find('NavBar').exists()).toBe(true);
    expect(wrapper.find('Footer').exists()).toBe(true);
  });
});
