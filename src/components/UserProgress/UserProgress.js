import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'reactstrap';
import Button from '../Button';
import './userProgress.scss';

const UserProgress = ({ certified, enrolled }) => (
  <div className="userProgress">
    <h5>
      {certified
        ? (
          <Fragment>
            <span className="badge">
              <Badge color="success">Certified</Badge>
            </span>
            <span className="expTime"> 9 months </span>
            till your certification expires, click arrow to retake test
            <Link to="/dashboard">
              <FontAwesomeIcon icon="arrow-right" className="arrowIcon" />
            </Link>
          </Fragment>
        )
        : (
          <Fragment>
            <span>
              {enrolled ? 'Continue your certification journey' : 'You have not enrolled in any course'}
            </span>
            <Link to="/dashboard">
              <Button type="button" text={enrolled ? 'Continue' : 'Start journey'} />
            </Link>
          </Fragment>
        )}
    </h5>
  </div>
);

UserProgress.defaultProps = {
  certified: false,
  enrolled: false,
};

UserProgress.propTypes = {
  certified: PropTypes.bool,
  enrolled: PropTypes.bool,
};
export default UserProgress;
