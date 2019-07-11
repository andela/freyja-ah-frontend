/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getModule } from '../../../store/actions/moduleActions';
import './view-module.scss';

export class ViewModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('called');
    // const { id } = this.props.match.params;
    // console.log('match params id', this.props.match.params);
    // if (typeof Number(id) !== 'number') {
    //   return <Redirect to="/dashboard" />;
    // }
    // console.log(getModule);
    this.props.getModule(1);
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    const { id, name, description } = this.props.singleModule;

    const contents = [
      {
        name: 'What is Flavor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'www.google.com',
        contentId: 1,
      },
      {
        name: 'Why is Building Flavor Important',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'www.udemy.com',
        contentId: 2,
      },
      {
        name: 'What are the types of Flavor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'www.udemy.com',
        contentId: 3,
      },
      {
        name: 'Can Flavor be acquired',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'www.udemy.com',
        contentId: 4,
      },
    ];

    const allContents = contents.map((content) => {
      const { name, link, contentId } = content;

      return (
        <div key={contentId} className="content-item">
          <Link to={link}>
            <h5>{name}</h5>
          </Link>
        </div>
      );
    });

    return (
      <React.Fragment>
        <Navbar />
        <Container className="view-module-container" fluid>
          <Row className="m-row">
            <Col className="sidebar" sm="2">
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

            <Col sm="10">
              <main className="module-main">

                <div className="module-header">
                  <h2>{name}</h2>
                  <p className="module-description">
                    {description}
                  </p>
                </div>

                <div className="module-content">

                  <h2 className="module-header">Content</h2>

                  <div className="module-content-items">
                    {allContents}
                  </div>
                </div>
              </main>

            </Col>
          </Row>

        </Container>
        <Footer />
      </React.Fragment>

    );
  }
}

ViewModule.propTypes = {
  // match: PropTypes.shape({
  //   params: PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //   }),
  // }),
  auth: PropTypes.shape({
    isLoading: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    errors: PropTypes.shape({ error: PropTypes.string }),
  }),
  singleModule: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.array,
  }),
};

const mapStateToProps = state => ({
  auth: state.auth,
  singleModule: state.modules.singleModule,
});

const mapDispatchToProps = {
  getModule,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewModule);
