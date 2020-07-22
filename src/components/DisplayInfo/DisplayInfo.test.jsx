import React from 'react';
import { shallow } from 'enzyme';
import DisplayInfo from './DisplayInfo';

describe('DisplayInfo', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <DisplayInfo 
        profile={{}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
