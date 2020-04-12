import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../Avatar';

describe('Avatar component', () => {
  test('Should render with no issues', () => {
    const component = shallow(
      <Avatar source={{ uri: 'https://i.imgur.com/0y8Ftya.jpg' }}> </Avatar>
    );
    expect(component.length).toBe(1);
  });
});
