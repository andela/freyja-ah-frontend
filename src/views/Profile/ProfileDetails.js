import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './profileDetails.scss';
import defaultImage from '../../utils/config';


const ProfileDetails = ({ profile }) => (
  <div className="profile">
    <div className="profileImage">
      <img
        src={profile.image || defaultImage}
        alt="profile"
      />
      <FontAwesomeIcon icon="camera" />
    </div>
    <div className="profileDetails">
      <h4>
        {profile.name}
      </h4>
      <p className="email">
        {profile.email}
      </p>
    </div>
    <hr className="style-two" />
    <div className="biography">
      <h4> My Biography </h4>
      <p>
        {profile.bio || 'Nil'}
      </p>
    </div>
    <div className="social-details">
      {profile.socialMedia
        ? profile.socialMedia.map(social => (
          <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name}>
            <FontAwesomeIcon icon={['fab', `${social.name}`]} />
          </a>
        ))
        : (
          <div>
            <FontAwesomeIcon icon={['fab', 'facebook']} />
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </div>
        )
      }


    </div>
  </div>

);

ProfileDetails.propTypes = {
  profile: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    bio: PropTypes.string,
    socialMedia: PropTypes.array,
  }),
};
export default ProfileDetails;
