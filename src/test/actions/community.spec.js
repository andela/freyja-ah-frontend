import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Community } from '../../components/Community/Community';
import * as actions from '../../../store/actions/community';

describe('test community component methods', () => {
  sinon.spy(Community.prototype, 'HandledelCommunityMessage');
  sinon.spy(Community.prototype, 'toggle');

  const props = {
    getCommunityMessages: () => actions.getCommunityMessages(),
    delMessage: () => actions.deleteCommunityMessage(),
    messages: [{ id: 1 }],
  };

  const enzymeWrapper = shallow(<Community {...props} />);
  let wrapper;
  beforeEach(() => {
    wrapper = enzymeWrapper;
  });

  it('should test community', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should test a method', () => {
    wrapper.setState({ messages: [{ id: 1 }] });
    const button = wrapper.find('.del').first();

    button.simulate('click');
    expect(Community.prototype.toggle.called).toBe(true);
    expect(wrapper.state().modal).toBe(true);
  });
  it('should test delete message method on modal', () => {
    wrapper.setState({ modal: true, messageId: 2 });
    const button = wrapper.find('Button').first();

    button.simulate('click');
    expect(Community.prototype.HandledelCommunityMessage.called).toBe(true);
  });
  it('should test cancel button', () => {
    wrapper.setState({ modal: true, messageId: 2 });
    const button = wrapper.find('Button').at(1);

    button.simulate('click');
    expect(Community.prototype.toggle.called).toBe(true);
  });
});
