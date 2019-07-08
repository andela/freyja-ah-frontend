import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Home = () => (
  <div>
    <h2> This is the home</h2>
    <Link to="/login"> Go to Login Page </Link>
    <div className="footer-div">
      <Footer />
    </div>
  </div>
);

export default Home;
