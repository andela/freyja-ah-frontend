import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';
import getToken from '../../../store/actions/auth';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const token = getToken();
    let display = (
      <NavItem>
        <Link to="/login">
          <Button className="button-style"> Log in </Button>
        </Link>
        <Link to="/signup">
          <Button className="button-style"> Sign up </Button>
        </Link>
      </NavItem>
    );
    if (token) {
      display = (
        <NavItem>
          <Link to="/profile">
            <Button className="button-style"> Profile </Button>
          </Link>
          <Link to="/logout">
            <Button className="button-style"> Log out </Button>
          </Link>
        </NavItem>
      );
    }
    const { isOpen } = this.state;
    return (
      <header>
        <Navbar className="nav-style" light expand="md">
          <div>
            <Link to="/" className="navBrand">
              Communitee
            </Link>
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {display}
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
