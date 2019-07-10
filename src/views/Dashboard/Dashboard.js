/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modules from '../../components/Modules/Modules';
import './Dashboard.scss';

/**
 * @class SignUp
 * @description SignUp component
 * @param {object} event - Synthetic event object
 */
class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className="d-container">
          <div className="d-row">
            <Row>
              <Col sm="2" className="d-sideBar">
                <aside>
                  <div>
                    <span>Communitee</span>
                  </div>
                  <ul className="d-links">
                    <li>Modules</li>
                    <li>Profile</li>
                    <li>Payment</li>
                    <li>Help</li>
                  </ul>
                </aside>
              </Col>
              <Col sm="10" className="m-main">
                <Modules />
              </Col>
            </Row>
          </div>
        </main>
        <div className="footer-div">
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
