// import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import { ResetPasswordCard } from '../../../components/ResetPassword/ResetPassword';

describe('Test methods', () => {
  sinon.spy(ResetPasswordCard.prototype, 'handleSubmit');
  sinon.spy(ResetPasswordCard.prototype, 'handleEmail');

  function shallowSetup() {
    const props = {
      ResetPassword: () => {},
      loading: true,
      passwordResetSuccess: 'please check you email',
      passwordResetError: 'invalid email',
    };

    const enzymeWrapper = shallow(<ResetPasswordCard {...props} />);

    return {
      props,
      enzymeWrapper,
    };
  }

  describe('Shallow rendered Reset password Card', () => {
    it('should render a card with the details of the Reset password page', () => {
      const { enzymeWrapper } = shallowSetup();
      expect(enzymeWrapper.find('.error').text()).toBe('invalid email');
      expect(enzymeWrapper.find('.success').text()).toBe('please check you email');
      expect(enzymeWrapper.find('CardText').first().text()).toBe('<CardText />');
    });
  });
  it('should tes', () => {
    expect(2).toBe(2);
  });
});

function shallowSetup() {
  const props = {
    ResetPassword: () => {},
    loading: true,
    passwordResetSuccess: 'please check you email',
    passwordResetError: 'invalid email',
  };

  const enzymeWrapper = shallow(<ResetPasswordCard {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Shallow rendered Reset password Card', () => {
  it('should render a card with the details of the Reset password page', () => {
    // Setup wrapper and assign props.
    const { enzymeWrapper } = shallowSetup();
    expect(enzymeWrapper.find('.error').text()).toBe('invalid email');
    expect(enzymeWrapper.find('.success').text()).toBe('please check you email');
    expect(enzymeWrapper.find('Button').text()).toBe('<Button />');
    expect(enzymeWrapper.find('i').first().text()).toBe('');
    expect(enzymeWrapper.find('CardText').first().text()).toBe('<CardText />');
  });
});

describe('Reset Password', () => {
  let wrapper;
  beforeEach(() => {
    // spy on the component handleOpen method
    // sinon.spy(ResetPasswordCard.prototype, 'handleSubmit');
    const { enzymeWrapper } = shallowSetup();
    wrapper = enzymeWrapper;
  });
  it('should update the state property _**`formOpen`**_ and call handleOpen when edit button is clicked', () => {
    // find the edit button and simulate a click on it
    const button = wrapper.find('Button').first();
    button.simulate('click');
    // The handleOpen method should be called.
    expect(ResetPasswordCard.prototype.handleSubmit.calledOnce).toBe(true);
    // The value of this.state.formOpen should now be true
  });

  it('should display current values in edit fields', () => {
    const input = wrapper.find('InputField');
    const mockedEvent = { target: {} };
    input.simulate('change', mockedEvent);

    expect(ResetPasswordCard.prototype.handleEmail.calledOnce).toBe(true);

    // expect(wrapper.find('input').at(0).props().defaultValue).toEqual(props_.title);
  });
});
