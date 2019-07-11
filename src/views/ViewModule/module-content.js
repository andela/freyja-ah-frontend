import React from 'react';
import PropTypes from 'prop-types';

const ModuleContent = ({ contentItems }) => (
  <div className="message-img">
    <h2>{moduleName}</h2>
    <p className="module-description">
      {moduleDescription}
    </p>
  </div>
);

ModuleContent.propTypes = {
  contentItems: PropTypes.array.isRequired,
};

export default ModuleContent;
