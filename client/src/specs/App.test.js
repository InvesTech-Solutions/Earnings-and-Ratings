import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './app.js';

describe('component: App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />);
    const exampleLoaded = 1;
    console.log(exampleLoaded);
    expect(exampleLoaded).toEqual(1)
  });
});
