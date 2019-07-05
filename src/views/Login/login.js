<<<<<<< HEAD
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Form } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../assets/images/logo3.png';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/inputs/input';
import { loginUser } from '../../store/actions/authActions';
import './login.scss';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validationErrors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateFormInput = this.validateFormInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { validationErrors } = this.state;

    this.setState({
      [e.target.name]: e.target.value,
      validationErrors: { ...validationErrors, [e.target.name]: '' },
    });
  }

  validateFormInput() {
    const errors = {};
=======
import React, { Component } from 'react'
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../../store/actions/authActions';
import './Login.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
    validationErrors: {}
  } 

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validateFormInput = () => {
    let errors = {};
>>>>>>> Created Login component with its action creators
    const emailRegx = /^\S+@\S+\.[\w]+$/;

    Object.entries(this.state).forEach(([property, value]) => {
      const input = typeof value === 'string' ? value.trim() : '';

<<<<<<< HEAD
      switch (property) {
        case 'email':
          if (input.length === 0) {
            errors[property] = 'Email address is required';
          } else if (!emailRegx.test(input)) {
            errors[property] = 'Enter a valid email address';
=======
      switch(property) {
        case 'email':
          if (input.length === 0) {
            errors[property] = 'Email address is required'
          }
          else if (!emailRegx.test(input)) {
            errors[property] = 'Enter a valid email address'
>>>>>>> Created Login component with its action creators
          }
          break;
        case 'password':
          if (input.length === 0) {
<<<<<<< HEAD
            errors[property] = 'Password is required';
=======
            errors[property] = 'Password is required'
>>>>>>> Created Login component with its action creators
          }
          break;
        default:
          break;
      }
    });

    if (Object.keys(errors).length !== 0) {
<<<<<<< HEAD
      this.setState({
        validationErrors: { ...errors },
      });
      return false;
    }

    this.setState({
      validationErrors: {},
    });
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.auth.isLoading) return;

    if (this.validateFormInput()) {
      const userData = Object.entries(this.state).reduce((user, [property, input]) => {
        if (typeof input === 'string') {
          // eslint-disable-next-line no-param-reassign
          user[property] = input.trim();
        }
        return user;
      }, {});

=======
      this.setState({ validationErrors: {...errors} })
      return false;
    } else {
      this.setState({ validationErrors: {} })
      return true;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateFormInput()) {

      const userData = Object.entries(this.state).reduce(
        (user, [property, input]) => {
          if (typeof input === 'string') {
            user[property] = input.trim();
          }
          return user;
        }, {})
      
>>>>>>> Created Login component with its action creators
      this.props.loginUser(userData);
    }
  }

  render() {
<<<<<<< HEAD
    const { isLoading, isAuthenticated, errors } = this.props.auth;

    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    const authError = errors.error || '';
=======
    const { isAuthenticated, isLoading, errors } = this.props.auth;

    if (isAuthenticated) {
      return <Redirect to="/dashboard" />
    }

    const authError = errors.error === undefined || errors.error === '' ? '' : errors.error;
>>>>>>> Created Login component with its action creators
    const { email, password } = this.state.validationErrors;

    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <section className="container">
          <Card className="form-container">
            <Form onSubmit={this.handleSubmit} id="form">

              <div>
<<<<<<< HEAD
                <p className="logo">
                  <img src={Logo} alt="Logo" />
                </p>
                <h2 className="header"> LOGIN </h2>
                <span className="error" id="form-feedback">{authError}</span>
              </div>

              <Input
                id="email-input"
                onChange={this.handleChange}
                type="text"
                name="email"
                value={this.state.email}
                placeholder="Enter Email"
                displayError={email}
              />
              <span className="error">{email || ''}</span>

              <Input
                id="password-input"
                onChange={this.handleChange}
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Enter Password"
              />
              <span className="error">{password || ''}</span>

              <Button
                type="submit"
                classname="submit"
                text={isLoading ? 'Please wait..' : 'Submit'}
              />

              <p><Link className="forgot-password" to="/password-reset">Forgot Password?</Link></p>
              <p>
                Dont have an account yet?
                <Link className="sign-up" to="/sign-up"> Sign Up</Link>
              </p>
            </Form>

          </Card>
        </section>
        <Footer />
      </React.Fragment>
    );
=======
                <h2 className="header"> Login </h2>
                <span className="error" id="form-feedback">{authError}</span>
              </div>

              <FormGroup>
                <Label for="email" className="label">Email</Label>
                <Input onChange={this.handleChange} type="email" name="email" placeholder="Enter Email" />
                <span className="error">{email ? email : ''}</span>
              </FormGroup>

              <FormGroup>
                <Label for="password" className="label">Password</Label>
                <Input onChange={this.handleChange} type="password" name="password" placeholder="Enter Password" />
                <span className="error">{password ? password : ''}</span>
              </FormGroup>

              <Button type="submit" id="submit">Submit</Button>
              <p><Link className="forgot-password" to="/password-reset">Forgot Password?</Link></p>  
              <p>Dont have an account yet? <Link className="sign-up" to="/sign-up">Sign Up</Link></p>
            </Form>

          </Card>
      </section>
        {/* <Footer /> */}
      </React.Fragment>
    )
>>>>>>> Created Login component with its action creators
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
<<<<<<< HEAD
  auth: PropTypes.object,
};

const mapStateToProps = state => ({
=======
  auth: PropTypes.object
}

const mapStateToProps = (state) => ({
>>>>>>> Created Login component with its action creators
  auth: state.auth,
});

const mapDispatchToProps = {
<<<<<<< HEAD
  loginUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
=======
  loginUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
>>>>>>> Created Login component with its action creators
)(Login);
