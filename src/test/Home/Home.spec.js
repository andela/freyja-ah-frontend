/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../../store/reducers/index';
import Home from '../../views/Home/Home';

const store = createStore(reducers);
describe('test Landing Page component', () => {
  const landingPage = mount(<Provider store={store}>
    <Router>
      <Home />
    </Router>
  </Provider>);
  it('should ensure that home page exists,  and it includes header and footer components', () => {
    expect(landingPage.find('Header').exists()).toBe(true);
    expect(landingPage.find('Footer').exists()).toBe(true);
  });
  it('should contain a landing-container div', () => {
    expect(landingPage.find('div.landing-container').exists()).toBe(true);
  });
});
