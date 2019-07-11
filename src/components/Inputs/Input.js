import React, { Fragment } from './node_modules/react';
import './node_modules/bootstrap/dist/css/bootstrap.css';
import PropTypes from './node_modules/prop-types';
import './inputs.scss';

const InputField = ({ id, type, placeholder, name, onChange, value }) => (
  <Fragment>
    <input
      id={id}
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  </Fragment>
);
InputField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  type: 'text',
};
export default InputField;
