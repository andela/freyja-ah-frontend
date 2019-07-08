import React from 'react';
import './testComponent.scss';
import ButtonComponent from '../Button';

const TestComponent = () => (
  <React.Fragment>
    <div>
      <div className="newcomponent">
        <h2>Customer Service Learning Community</h2>
        <p>
          Testing the sass configuration on webpack Testing the sass configuration on webpackTesting the sass configuration on webpack
          Testing the sass configuration on webpackTesting the sass configuration on webpack
        </p>
      </div>
    </div>
    <ButtonComponent text="Submit" />
  </React.Fragment>
);

export default TestComponent;
