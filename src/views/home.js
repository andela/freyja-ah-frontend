import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2> This is the home</h2>
    <Link to="/login"> Go to Login Page </Link>
  </div>
);

export default Home;
