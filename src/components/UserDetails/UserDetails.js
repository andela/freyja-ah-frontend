import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './userDetails.scss';
import PropTypes from 'prop-types';

const UserDetails = ({ profile }) => {
  const getValue = (value) => {
    const val = (profile && profile[value]) ? profile[value] : 'Nil';
    return val;
  };
  const details = [
    { header: 'Username', value: 'username' },
    { header: 'Phone number', value: 'phoneNumber' },
    { header: 'Date of birth', value: 'DOB' },
    { header: 'Industry', value: 'industry' },
    { header: 'Years of experience', value: 'yrsOfExperience' },
  ];
  return (
    <div className="jumbotron">
      <div className="details">
        <FontAwesomeIcon icon="user-edit" />
        <ul>
          {details.map(detail => (
            <li key={detail.value}>
              <h4>
                {detail.header }
              </h4>
              <span className="userValues">
                {getValue(`${detail.value}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  profile: PropTypes.shape({
    phoneNumber: PropTypes.string,
  }),
};
export default UserDetails;
