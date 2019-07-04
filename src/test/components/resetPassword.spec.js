import React from 'react';
import { shallow } from 'enzyme';
import ResetPasswordCard from '../../components/ResetPassword/ResetPasswordCard';
import store from '../../../store';

describe('Reset password component', () => {
  it('should render correctly the reset password component', () => {
    const ResetPassword = shallow(<ResetPasswordCard store={store} />);
    expect(ResetPassword).toMatchSnapshot();
  });
});
