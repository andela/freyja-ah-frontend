import React from 'react';
import PropTypes from 'prop-types';
import './moduleSidebar.scss';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import sideLogo from '../../assets/images/logo.png';

const ModuleSidebar = () => (
  <Sidebar>
    <div className="d-aside">
      <div>
        <span className="d-logo">
          <img src={sideLogo} alt="logo" />
        Community
        </span>
      </div>
      <ul className="d-links">
        <li className="module-active"><Link to="/dashboard">Modules</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/aboutus">Help</Link></li>
      </ul>
    </div>
  </Sidebar>
);

export default ModuleSidebar;
