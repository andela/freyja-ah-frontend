import React from 'react';
import { Card, Input, CardText, CardBody, CardTitle, CardSubtitle, Button, FormGroup } from 'reactstrap';
import './resetpassword.scss';

/**
 * @description
 * @param
 * @returns
 */
export const ResetPasswordCard = () => {
	return (
  <div className="container">
    <Card>
      <CardBody>
      <CardSubtitle>
      <i className="fas fa-lock" />
      </CardSubtitle>
      <CardTitle className="forgot"> Forgot Password? </CardTitle>
      <CardText>
						Please enter your email address here and we will send you information to change your password
      </CardText>
      <FormGroup>
      <div className="icon">
      <i className="far fa-envelope" />
      </div>
      <Input placeholder="Email" className="input" id="email" />
      </FormGroup>
      <Button className="buttons">Reset Password</Button>
      </CardBody>
    </Card>
  </div>
	);
};
