import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('component: App', () => {
  it('should render', () => {
    console.log(App)
    const wrapper = shallow(<App />);
    const exampleLoaded = 1
    expect(exampleLoaded).toEqual(1)
  });
});
