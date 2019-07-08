import { shallow } from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import { ResetPasswordCard } from '../../../components/ResetPassword/ResetPasswordCard';


describe('Test methods', () => {
  beforeEach(() => {
    sinon.spy(ResetPasswordCard.prototype, 'handleSubmit');
    sinon.spy(ResetPasswordCard.prototype, 'handleEmail');
  });
  it('should tes', () => {
    expect(2).toBe(2);
  });
});

function shallowSetup() {
  const props = {
    ResetPassword: () => {},
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
    expect(enzymeWrapper.find('.error').text()).toBe('');
    expect(enzymeWrapper.find('.success').text()).toBe('');
    expect(enzymeWrapper.find('Button').text()).toBe('<Button />');
    expect(enzymeWrapper.find('i').first().text()).toBe('');
    expect(enzymeWrapper.find('CardText').first().text()).toBe('<CardText />');
  });
});

describe('Reset Password', () => {
  let wrapper;
  beforeEach(() => {
    const { enzymeWrapper } = shallowSetup();
    wrapper = enzymeWrapper;
  });
  it('should update the state property _**`formOpen`**_ and call handleOpen when edit button is clicked', () => {
    const button = wrapper.find('Button').first();
    button.simulate('click');
    expect(ResetPasswordCard.prototype.handleSubmit.calledOnce).toBe(true);
  });

  it('should display current values in edit fields', () => {
    const input = wrapper.find('Input').first();
    const mockedEvent = { target: {} };
    input.simulate('change', mockedEvent);

    expect(ResetPasswordCard.prototype.handleEmail.calledOnce).toBe(true);
  });
});
