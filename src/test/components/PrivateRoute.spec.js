import React from 'react';
import { shallow } from 'enzyme';
import { PrivateRoute } from '../../components/PrivateRoute/PrivateRoute';
import { Dashboard } from '../../views/Dashboard/Dashboard';

const props = {
  component: Dashboard,
  isAuthenticated: true,
};
describe('component: PrivateRoute', () => {
  it('should render correctly', (done) => {
    const wrapper = shallow(<PrivateRoute />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
  it('should render when user is Authenticated', (done) => {
    const wrapper = shallow(<PrivateRoute {...props} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
