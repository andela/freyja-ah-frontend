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
import validateSignupInput from '../../validations/validateSignupInput';

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
      authErrors: {},
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
    const { validationErrors, isValid } = validateSignupInput(newUser);
    if (!isValid) {
      this.setState({
        authErrors: validationErrors,
      });
    } else {
      this.props.registerUser(newUser, history);
    }
  }

  render() {
    let displayError;
    let secDisplayError;
    const { authErrors } = this.state;
    if (authErrors.status) {
      displayError = authErrors;
      // console.log(displayError);
    }
    // console.log(errors);


    // let firstError;
    // let lastError;
    // let email;
    // let password;
    // displayError = errors.error;
    // secDisplayError = errors.error;
    // if (errors && typeof secDisplayError === 'string') {
    //   secDisplayError = errors.error;
    //   console.log(secDisplayError);
    // }

    // if (errors && typeof secDisplayError === 'object') {
    //   displayError = errors.error;
    //   const errArray = displayError.filter(err => err.param === 'firstName');
    // displayError.forEach((err) => {
    //   const errormessage = err.msg;
    //   const errorParam = err.param;
    //   if (errorParam === 'firstName') {
    //     firstError = errormessage;
    //   }else
    // });
    //   console.log(errArray);
    //   console.log(displayError);
    // }

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
                    <div className="feedback">{displayError.firstName}</div>
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
                    <div className="feedback">{displayError.lastName}</div>
                  )}
                </FormGroup>
                <FormGroup className="inf">
                  <Input
                    className="input username"
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
                    <div className="feedback">{displayError.email}</div>
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
                    <div className="feedback">{displayError.password}</div>
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
                    <div className="feedback">{displayError.confirmPassword}</div>
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

const signUpPage = connect(
  mapStateToProps,
  { registerUser },
)(withRouter(SignUp));
export default signUpPage;
export { SignUp };
