import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../components/Sidebar/Sidebar';

describe('component: Header', () => {
  it('should render correctly', (done) => {
    shallow(<Sidebar>{<h1> Hello world </h1>}</Sidebar>);
    done();
  });
});
