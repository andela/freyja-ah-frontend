import React from 'react';
import { Link } from 'react-router-dom';
import ExampleForm from '../components/inputs/exampleForm';
import Footer from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

const Home = () => (
  <div>
    <Header />
    <h2> This is the home</h2>
    <ExampleForm />
    <Link to="/login"> Go to Login Page </Link>
    <div className="footer-div">
      <Footer />
    </div>
    <br />
    <Link to="/signup"> Go to Signup Page </Link>
  </div>
);

export default Home;
