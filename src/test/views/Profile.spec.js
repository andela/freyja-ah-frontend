import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from '../../views/Profile/Profile';

const props = {
  userId: 4,
  profile: {
    data: {
      id: 1,
      phoneNumber: 3223232,
      dateOfBirth: '12/12/12',
      isEmployed: true,
      yrsOfExperience: 4,
      industry: 'Andela',
      image: 'http://',
      isCertified: false,
    },
  },
  getProfile: () => {},
};
describe('component: Profile compoennt', () => {
  it('should render correctly', () => {
    shallow(<Profile {...props} />);
  });
});
