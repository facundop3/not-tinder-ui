import React from 'react';
import { shallow } from 'enzyme';
import AddRemoveImage from '../AddRemoveImage';
import RoundButton from '../RoundButton';

describe('AddRemoveImage component', () => {
  // Make test fail if type validation doesn't match
  const originalConsoleError = global.console.error;
  beforeEach(() => {
    global.console.error = (...args) => {
      const propTypeFailures = [/Failed prop type/, /Warning: Received/];

      if (propTypeFailures.some(p => p.test(args[0]))) {
        throw new Error(args[0]);
      }
      originalConsoleError(...args);
    };
  });

  test('Should render with no issues:', () => {
    const component = shallow(<AddRemoveImage />);
    expect(component.length).toBe(1);
  });
  test('Should accept a imageSource', () => {
    const uri = 'https://i.imgur.com/0y8Ftya.jpg';
    const component = shallow(<AddRemoveImage imageSource={{ uri }} />);
    expect(component.length).toBe(1);
  });
  test('Should call onPress handlers once:', () => {
    const saveImageMock = jest.fn();
    const component = shallow(
      <AddRemoveImage addCallback={saveImageMock} />
    );
    component.find(RoundButton).simulate('press');
    expect(saveImageMock.mock.calls.length).toBe(1);
  });
});
