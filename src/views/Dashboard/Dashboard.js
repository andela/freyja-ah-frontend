/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { bindActionCreators } from 'redux';
import 'regenerator-runtime';
import { withRouter } from 'react-router-dom';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modules from '../../components/Modules/Modules';
import Sidebar from '../../components/Sidebar/Sidebar';
import { getModules } from '../../../store/actions/moduleActions';
import './dashboard.scss';

/**
 * @class SignUp
 * @description SignUp component
 * @param {object} event - Synthetic event object
 */
export class Dashboard extends Component {
  componentDidMount() {
    const { getCourseModules } = this.props;
    getCourseModules();
    console.log(getCourseModules());
  }
  // eslint-disable-next-line lines-between-class-members
  render() {
    // const { modules } = this.props;
    // console.log(this.props);
    return (
      <Fragment>
        <NavBar />
        <main className="d-container">
          <div className="d-row">
            <Row className="s-row">
              <Col sm="2" className="d-sidebar">
                <Sidebar>
                  <div className="d-aside">
                    <div>
                      <span className="d-logo">Communitee</span>
                    </div>
                    <ul className="d-links">
                      <li>Modules</li>
                      <li>Profile</li>
                      <li>Payment</li>
                      <li>Help</li>
                    </ul>
                  </div>
                </Sidebar>
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

/**
 * @method mapDispatchToProps
 * @description maps redux actions to props
 * @param {callback} dispatch destructured reducer state object
 * @returns {object} state
 */
export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getCourseModules: getModules,
  },
  dispatch,
);

/**
 * @method mapStateToProps
 * @description maps reducer states to props
 * @param {object} * destructured reducer state object
 * @returns {object} state
 */
// export const mapStateToProps = ({ auth }) => {
//   const {
//     errors,
//   } = auth;
//   return {
//     errors,
//   };
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
// });
// const mapDispatchToProps = dispatch => ({
//   getCourseModules: () => dispatch(getModules()),
// });


export default connect(
  null,
  mapDispatchToProps,
)(withRouter(Dashboard));


// export default connect(
//   null,
//   mapDispatchToProps,
// )(Dashboard);

Dashboard.propTypes = {
  getCourseModules: func.isRequired,
};
