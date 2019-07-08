import React from 'react';
import { Link } from 'react-router-dom';
import ExampleForm from '../components/inputs/exampleForm';

const Home = () => (
  <div>
    <h2> This is the home</h2>
    <ExampleForm />
    <Link to="/login"> Go to Login Page </Link>
  </div>
);

export default Home;
