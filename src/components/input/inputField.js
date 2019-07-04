import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const inputField = ({
  className,
  type,
  name,
  placeholder,
  onChange,
  value,
}) => (
  <Fragment>
    <input
      className={className}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </Fragment>
);

inputField.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default inputField;
