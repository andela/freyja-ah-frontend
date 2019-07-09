import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
// import stoUre from '../../../store/index';
import { SignUp } from '../../views/Signup/SignUp';
import { mockStore } from '../../../mocks/mockConfig';

const newUser = {
  firstName: 'Jones',
  lastName: 'Allen',
  userName: 'Allen',
  email: 'jonesallen@gmail.com',
  password: 'password',
  confirmPassword: 'password',
};
const props = {
  registerUser: () => { },
  auth: {},
  errors: {},
};
const setUp = () => {
  const wrapper = shallow(<SignUp {...props} />);
  return wrapper;
};

describe('Signup component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
    sinon.spy(SignUp.prototype, 'onChange');
    sinon.spy(SignUp.prototype, 'onSubmit');
  });
  afterEach(() => {
    SignUp.prototype.onChange.restore();
    SignUp.prototype.onSubmit.restore();
  });
  it('ensure onchange is called for firstname', () => {
    const event = { target: { name: 'firstName', value: 'spam' } };
    console.log('The component is', wrapper.find('.firstname').length);
    wrapper.find('.firstname').simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
  });
  it('ensure onchange is called for firstname', () => {
    const event = { target: { name: 'lastName', value: 'francisca' } };
    wrapper.find('.lastname').simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
  });
  it('ensure onchange is called for lastname', () => {
    const event = { target: { name: 'lastName', value: 'francisca' } };
    wrapper.find('.lastname').simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
  });
  it('ensure onchange is called for userName', () => {
    const event = { target: { name: 'userName', value: 'francisca' } };
    wrapper.find('.username').simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
  });
  it('ensure onchange is called for email', () => {
    const event = { target: { name: 'email', value: 'francis@gmail.com' } };
    wrapper.find('.email').simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
  });
  it('ensure onchange is called for password', () => {
    const event = { target: { name: 'password', value: 'francisca' } };
    wrapper.find('.password').simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
  });
  it('ensure onchange is called for confirmpassword', () => {
    const event = { target: { name: 'password', value: 'francisca' } };
    wrapper.find('.cpassword').simulate('change', event);
    expect(SignUp.prototype.onChange.called).toBe(true);
  });

  // it('should handle onSubmit', () => {
  //   wrapper.find('Button').simulate('click');
  //   expect(SignUp.prototype.onSubmit.calledOnce).toBe(true);
  // });
  it('should fail if no credentials are provided', () => {
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    expect(wrapper.find('.sign-form').length).toBe(1);
    wrapper.find('.sign-form').simulate('submit', fakeEvent);
    expect(SignUp.prototype.onSubmit.calledOnce).toBe(true);
  });
});
