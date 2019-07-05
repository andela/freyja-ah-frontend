import React, { Fragment } from 'react';
import { Button, FormGroup, Input, Card, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classname';
import { registerUser } from '../../../store/actions/authActions';
import Logo from '../../assets/images/logo3.png';
import Footer from '../../components/footer/footer';
import Heading from '../../components/heading/heading';
import Navbar from '../../components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './SignUp.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors.response.data,
      });
    }
  }

  onChange(e) {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit(e) {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    } = this.state;
    const { history } = this.props;
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      userName,
      email,
      password,
      confirmPassword,
    };

    this.props.registerUser(newUser, history);
  }

  render() {
    const { errors } = this.state;
    // console.log(errors);
    let displayError;
    let secDisplayError;
    displayError = errors.error;
    secDisplayError = errors.error;
    if (errors && typeof secDisplayError === 'string') {
      secDisplayError = errors.error;
      console.log(secDisplayError);
    }

    if (errors && typeof secDisplayError === 'object') {
      displayError = errors.error;
      console.log(displayError);
    }

    return (
      <Fragment>
        <section className="sec-signup">
          <Navbar className="navbar" />
          <div className="container">
            <Card className="signup-box">
              <form className="sign-form" onSubmit={this.onSubmit}>
                <img src={Logo} alt="Logo" />
                <Heading title="CREATE AN ACCOUNT" />
                {secDisplayError && (
                  <div className="feedbackk">{secDisplayError}</div>
                )}
                <FormGroup className="inf">
                  <Input
                    className={classnames('input firstname', {
                      'is-invalid': displayError,
                    })}
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={e => this.onChange(e)}
                  />
                  {displayError && (
                    <div className="feedback">{displayError[0].msg}</div>
                  )}
                </FormGroup>
                <FormGroup className="inf">
                  <Input
                    className={classnames('input lastname', {
                      'is-invalid': displayError,
                    })}
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={e => this.onChange(e)}
                  />
                  {displayError && (
                    <div className="feedback">{displayError[2].msg}</div>
                  )}
                </FormGroup>
                <FormGroup className="inf">
                  <Input
                    className="input lastname"
                    type="text"
                    placeholder="User Name"
                    name="userName"
                    value={this.state.userName}
                    onChange={e => this.onChange(e)}
                  />
                </FormGroup>
                <FormGroup className="inf">
                  <Input
                    className={classnames('input email', {
                      'is-invalid': displayError,
                    })}
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.onChange(e)}
                  />
                  {displayError && (
                    <div className="feedback">{displayError[4].msg}</div>
                  )}
                </FormGroup>
                <FormGroup className="inf">
                  <Input
                    className={classnames('input password', {
                      'is-invalid': displayError,
                    })}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.onChange(e)}
                  />
                  {displayError && (
                    <div className="feedback">{displayError[5].msg}</div>
                  )}
                </FormGroup>
                <FormGroup className="inf">
                  <Input
                    className={classnames('input cpassword', {
                      'is-invalid': displayError,
                    })}
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={e => this.onChange(e)}
                  />
                  {displayError && (
                    <div className="feedback">{displayError[6].msg}</div>
                  )}
                </FormGroup>
                <Button className="btnSubmit">Sign up</Button>{' '}
              </form>
              <CardBody />
            </Card>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}
SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(
  mapStateToProps,
  { registerUser },
)(withRouter(SignUp));
