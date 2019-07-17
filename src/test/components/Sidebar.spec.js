import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../components/Sidebar/Sidebar';

describe('component: Header', () => {
<<<<<<< HEAD
  it('should render correctly', (done) => {
    shallow(<Sidebar>{<h1> Hello world </h1>}</Sidebar>);
=======
  const wrapper = shallow(<Sidebar />);
  it('should render correctly', (done) => {
    expect(wrapper.find('aside').hasClass('aside')).toBe(true);
>>>>>>> fix test on rebase
    done();
  });
});
