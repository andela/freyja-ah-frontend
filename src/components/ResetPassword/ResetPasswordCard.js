/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-tabs */
import React, { PureComponent } from 'react';
import {
  Card, Input, CardText, CardBody, CardTitle, CardSubtitle, Button, FormGroup,
} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import './resetpassword.scss';
import { ResetPassword } from '../../../store/actions/authActions/resetPassword';


/**
 * @description
 * @param
 * @returns
 */
class ResetPasswordCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleEmail(e) {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ email: value });
  }

  handleSubmit(e) {
    e.preventDefault();

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
						Please enter your email address here and
						we will send you information to change your password
            </CardText>
            <div className="error">{this.props.passwordResetError}</div>
            <div className="success">{this.props.passwordResetSuccess}</div>
            <FormGroup>
              <div className="icon">
                <i className="far fa-envelope" />
              </div>
              <Input placeholder="Email" className="input" id="email" onChange={e => this.handleEmail(e)} />
            </FormGroup>
            <Button className="buttons" onClick={e => this.handleSubmit(e)}>{this.props.loading === true ? 'Loading...' : 'Reset Password'}</Button>
          </CardBody>
        </Card>
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
  ResetPassword: propTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResetPasswordCard));
