import React from 'react';
import PropTypes from 'prop-types';

export const Heading = ({ title }) => <h2 className="heading">{title}</h2>;
Heading.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Heading;
