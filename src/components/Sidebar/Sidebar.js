import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ children }) => (
  <aside className="aside">
    {children}
  </aside>
);

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Sidebar;
