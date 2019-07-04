import React, { Fragment } from 'react';
import { Button, FormGroup, Input, Card, CardBody } from 'reactstrap';
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
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
    };
  }

  render() {
    return (
      <Fragment>
        <section className="sec-signup">
          <Navbar className="navbar" />
          <div className="container">
            <Card className="signup-box">
              <form className="sign-form">
                <Heading
                  title="
          CREATE AN ACCOUNT"
                />
                <FormGroup className="inf">
                  <Input
                    className="input firstname"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={(e) => this.onChange(e)}
                  />
                </FormGroup>
                <FormGroup className="inf">
                  <Input
                    className="input lastname"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={(e) => this.onChange(e)}
                  />
                </FormGroup>
                <FormGroup className="inf">
                  <Input
                    className="input email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.onChange(e)}
                  />
                </FormGroup>
                <FormGroup className="inf">
                  <Input
                    className="input password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={(e) => this.onChange(e)}
                  />
                </FormGroup>
                <FormGroup className="inf">
                  <Input
                    className="input cpassword"
                    type="password"
                    placeholder="Confirm Password"
                    name="password"
                    value={this.state.confirmPassword}
                    onChange={(e) => this.onChange(e)}
                  />
                </FormGroup>
                <Button className="btnSubmit">SignUp</Button>{' '}
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
export default SignUp;
