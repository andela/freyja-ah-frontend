<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import ExampleForm from '../components/inputs/exampleForm';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Home = () => (
  <div>
    <Header />
    <h2> This is the home</h2>
    <ExampleForm />
    <Link to="/login"> Go to Login Page </Link>
    <div className="footer-div">
      <Footer />
    </div>
  </div>
);
=======
import React, { Component } from 'react';
import Header from '../components/Header/Header';

class Home extends Component {
    state = {
      isOpen: false,
    };


    handleToggle = () => {
      const { isOpen } = this.state;
      this.setState({
        isOpen: !isOpen,
      });
    }

    render() {
      const { isOpen } = this.state;
      return (
        <div>
          <Header isOpen={isOpen} toggle={this.handleToggle} />
        </div>
      );
    }
}

>>>>>>> create header componenet

export default Home;
