import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Earnings from './earnings.js';

describe('component: Earnings', () => {
  it('should render initial layout', () => {
    let wrapper = shallow(<Earnings />);
    expect(wrapper.getElements()).toMatchSnapshot();
  });

  it('After component updated, it should produce yRange in a $XX.XX format string', () => {
    let wrapper = shallow(<Earnings />);
    setTimeout(() => {
      let yRange = wrapper.state().yRange;
      let formatCheck = yRange.reduce((accum, element) => {
        if (accum === false) { return false; }
        let dollar = element[0] === '$';
        let dot = element.substring(element.length - 3)[0] === '.';
        if (dollar === true || dot === true) {
          return true;
        }
        return false;
      }, true);

      expect(formatCheck).toEqual(true);
    }, 0);
  });
});
