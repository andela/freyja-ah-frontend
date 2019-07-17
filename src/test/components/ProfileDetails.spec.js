import React from 'react';
import { shallow } from 'enzyme';
import ProfileDetails from '../../views/Profile/ProfileDetails';

const props = {
  profile: {
    image: 'http',
    socialMedia: [
      { name: 'facebook', url: 'http/' },
      { name: 'twitter', url: '/thpp' },
    ],
    email: 'tunde@mail.com',
    bio: 'A good man',
    name: 'Tyak',
  },
};
describe('component: ProfileDetails', () => {
  it('renders correctly', (done) => {
    shallow(<ProfileDetails {...props} />);
    done();
  });
});
