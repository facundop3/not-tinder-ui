import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import RoundButton from '../RoundButton';

describe('RoundButton component', () => {
  test('Should render with no issues:', () => {
    const handlePress = jest.fn();
    const component = shallow(<RoundButton onPress={handlePress} />);
    expect(component.length).toBe(1);
  });
  test('Should call onPress once:', () => {
    const handlePress = jest.fn();
    const component = shallow(<RoundButton onPress={handlePress} />);
    component.simulate('press');
    expect(handlePress.mock.calls.length).toBe(1);
  });
  test('Should accept a string as children', () => {
    const component = shallow(<RoundButton>Hello</RoundButton>);
    expect(component.contains(<Text>Hello</Text>)).toBeTruthy();
  });
});
