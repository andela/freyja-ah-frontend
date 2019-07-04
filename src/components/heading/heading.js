import React from 'react';
import PropTypes from 'prop-types';
import './heading.scss';

const heading = ({ title }) => <h2 className="boxx-tex">{title}</h2>;
heading.propTypes = {
  title: PropTypes.string.isRequired,
};
export default heading;
