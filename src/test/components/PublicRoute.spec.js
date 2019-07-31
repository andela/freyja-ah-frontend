import React from 'react';
import { shallow } from 'enzyme';
import { PublicRoute } from '../../components/PublicRoute/PublicRoute';
import { Dashboard } from '../../views/Dashboard/Dashboard';

const props = {
  component: Dashboard,
  isAuthenticated: false,
};
describe('component: PublicRoute', () => {
  it('should render correctly', (done) => {
    const wrapper = shallow(<PublicRoute />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
  it('should render correctly when isAuthenticated is false', (done) => {
    const wrapper = shallow(<PublicRoute {...props} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
