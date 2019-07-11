/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-tabs */
import React, { Component } from 'react';
import {
  CardText, CardBody, CardTitle, CardSubtitle, FormGroup,
} from 'reactstrap';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './resetpassword.scss';
import { ResetPassword } from '../../../store/actions/authActions/resetPassword';
import Card from '../card';
import Button from '../Button';
import Input from '../inputs/input';
import Footer from '../Footer/Footer';
/**
 * @description
 * @param
 * @returns
 */
export class ResetPasswordCard extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.state = {
      email: '',
    };
  }


  handleEmail(e) {
    const { value } = e.target;
    this.setState({ email: value });
  }

  handleSubmit() {
    const { email } = this.state;

    // eslint-disable-next-line react/prop-types
    this.props.ResetPassword(email, this.props.history);
  }

  render() {
    return (
      <div className="container">
        <div className="bg-image" />
        <Card>
          <CardBody>
            <CardSubtitle>
              <i className="fas fa-lock" />
            </CardSubtitle>
            <CardTitle className="forgot"> Forgot Password? </CardTitle>
            <CardText>
							Please enter your email address here and we will send you information to change your
							password
            </CardText>
            <div className="success">{this.props.passwordResetSuccess}</div>
            <FormGroup>
              <Input
                placeholder="Email"
                id="email"
                onChange={e => this.handleEmail(e)}
              />
              <div className="error">{this.props.passwordResetError}</div>
            </FormGroup>
            <Button
              classname="button"
              type="button"
              onClick={e => this.handleSubmit(e)}
              text={this.props.loading === true ? 'Loading...' : 'Reset Password'}
            />
          </CardBody>
        </Card>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  ResetPassword,
};

const mapStateToProps = state => ({
  passwordResetError: state.auth.passwordResetError,
  passwordResetSuccess: state.auth.passwordResetSuccess,
  loading: state.auth.loading,
});

ResetPasswordCard.propTypes = {
  ResetPassword: propTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordCard);
