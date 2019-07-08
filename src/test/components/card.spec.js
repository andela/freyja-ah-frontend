import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/card/card';

let ResetPassword;

describe('Card component', () => {
  it('should render correctly the card component', () => {
    ResetPassword = shallow(<Card />);
    expect(ResetPassword).toMatchSnapshot();
  });
});
