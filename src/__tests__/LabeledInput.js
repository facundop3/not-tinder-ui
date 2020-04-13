import React from 'react';
import { TextInput } from 'react-native';
import { shallow } from 'enzyme';
import LabeledInput from '../LabeledInput';

describe('LabeledInput component', () => {
  test('Should render with no issues:', () => {
    const component = shallow(<LabeledInput label="Hello" onTextChange={() => { }} value="sample" />);
    expect(component.length).toBe(1);
  });
  test('Should render label text:', () => {
    const component = shallow(<LabeledInput label="Hello" onTextChange={() => { }} value="sample" />);
    expect(component.contains('Hello')).toBeTruthy();
  });
  test('Should execute onTextChange once:', () => {
    const onTextChangeMock = jest.fn();
    const component = shallow(<LabeledInput label="hello" value="hello" onTextChange={onTextChangeMock} />);
    component.find(TextInput).simulate('changeText', 'sample');
    expect(onTextChangeMock.mock.calls.length).toBe(1);
  });
});
