import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import Card from '../Card';

describe('Card component:', () => {
  test('Should render with no issues:', () => {
    const component = shallow(<Card />);
    expect(component.length).toBe(1);
  });
  test('Should render children with no issues:', () => {
    const component = shallow(<Card><Text>hello</Text></Card>);
    expect(component.contains(<Text>hello</Text>)).toBeTruthy();
  });
});
