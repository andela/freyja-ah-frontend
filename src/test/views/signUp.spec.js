import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import store from '../../../store/index';
import Signup from '../../views/Signup/SignUp';
import { mockStore } from '../../../mocks/mockConfig';

const newUser = {
  firstName: 'Jones',
  lastName: 'Allen',
  userName: 'Allen',
  email: 'jonesallen@gmail.com',
  password: 'password',
  confirmPassword: 'password',
};
const store = mockStore({ user: { newUser } });
const setUp = () => {
  const component = shallow(<Signup store={store} />);
  return component;
};

describe('Signup component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
});
