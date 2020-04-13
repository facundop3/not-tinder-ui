import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../Avatar';

describe('Avatar component', () => {
  test('Should render with no issues', () => {
    const component = shallow(
      <Avatar source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }} />
    );
    expect(component.length).toBe(1);
  });
  test('Acepts a size number', () => {
    const uri = 'https://i.imgur.com/0y8Ftya.jpg';
    const component = shallow(<Avatar source={{ uri }} size={80} />);
    expect(component.length).toBe(1);
  });
});
