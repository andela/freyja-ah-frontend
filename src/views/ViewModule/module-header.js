import React from 'react';
import PropTypes from 'prop-types';

const ModuleHeader = ({ moduleName, moduleDescription }) => (
  <div className="message-img">
    <h2>{moduleName}</h2>
    <p className="module-description">
      {moduleDescription}
    </p>
  </div>
);

ModuleHeader.propTypes = {
  moduleName: PropTypes.string.isRequired,
  moduleDescription: PropTypes.string.isRequired,
};

export default ModuleHeader;
