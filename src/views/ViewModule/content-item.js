/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { connect } from 'react-redux';
import './view-module.scss';

export default class ViewModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {},
    };
  }

  handleChange(e) {
    const { validationErrors } = this.state;

    this.setState({
      [e.target.name]: e.target.value,
      validationErrors: { ...validationErrors, [e.target.name]: '' },
    });
  }

  render() {
    // const { isAuthenticated, errors } = this.props.auth;

    return (
      <Container fluid>
        {/* Navigation */}
        <Row>
          <Col className="sidebar" sm="3">
            <div>liheoihsoiehw[oiehws[0eoihw[oiewh[eoiwh</div>
          </Col>

          <Col className="main" sm="9">
            <div>liheoihsoiehw[oiehws[0eoihw[oiewh[eoiwh</div>
          </Col>
        </Row>



        </Container>
    );
  }
}

// ViewModule.propTypes = {
//   ViewModule: PropTypes.func.isRequired,
//   auth: PropTypes.object,
// };

// const mapStateToProps = state => ({
//   auth: state.auth,
// });

// const mapDispatchToProps = {
//   ViewModule,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ViewModule);
