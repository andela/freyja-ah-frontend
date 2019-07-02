import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return <div>Hello world</div>;
  }
}

ReactDom.render(<App />, document.getElementById('app'));
