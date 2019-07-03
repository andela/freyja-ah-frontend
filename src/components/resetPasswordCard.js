import React, { PureComponent } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Input, Col,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ResetPasswordCard extends PureComponent {
  render() {
    return (
      <Col sm={{ size: 9, order: 8, offset: 2 }} className="mt-6">
        <Card
          body
          className="text-center "
          style={
            {
              backgroundColor: '#fff', borderColor: '#fff', borderRadius: '14px', marginTop: '10%', paddingTop: '5%', height: '70%'
            }
        }
        >
          <CardImg top width="100%" src="" alt="Card image cap" />
          <CardBody>
            <CardTitle>Forgot Password</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
                Please enter your email address below and we will
                send you information on how to change your password
            </CardText>
            <Input placeholder="email" />
            <Button className="mt-3">Reset password</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default ResetPasswordCard;
