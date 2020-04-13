import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import CustomSwitch from '../CustomSwitch';

describe('CustomSwitch component', () => {
  test('Should render with no issues:', () => {
    const component = shallow(<CustomSwitch handleChange={() => { }} />);
    expect(component.length).toBe(1);
  });
  test('Should call handlePress handler once:', () => {
    const handlePressMock = jest.fn();
    const component = shallow(<CustomSwitch handleChange={handlePressMock} />);
    component.simulate('press');
    expect(handlePressMock.mock.calls.length).toBe(1);
  });
  test('Should render with no issues when passing left and rightIcon components:', () => {
    // The component accepts a ReactNode element on both props,
    // So we are testing with a Text component
    const rightIcon = <Text>rightIcon</Text>;
    const leftIcon = <Text>leftIcon</Text>;
    const component = shallow(
      <CustomSwitch
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        isToggledRight
        handleChange={() => { }}
      />
    );
    component.simulate('press');
    expect(component.contains(rightIcon)).toBeTruthy();
    expect(component.contains(leftIcon)).toBeTruthy();
  });
});
