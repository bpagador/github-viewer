import React from 'react';
import { shallow } from 'enzyme';
import UserInput from './UserInput';

describe('UserInput', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<UserInput username='testUsername' 
      onChange={() => {}}
      onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
