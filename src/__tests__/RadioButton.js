import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from '../RadioButton';

describe('RadioButton component', () => {
  test('Should render with no issues:', () => {
    const component = shallow(<RadioButton />);
    expect(component.length).toBe(1);
  });
  test('Should call handlePress once:', () => {
    const mockFunction = jest.fn();
    const component = shallow(<RadioButton handlePress={mockFunction} />);
    component.simulate('press', {});
    expect(mockFunction.mock.calls.length).toBe(1);
  });
  test('Accepts selected value', () => {
    const component = shallow(<RadioButton selected />);
    expect(component.length).toBe(1);
  });
});
