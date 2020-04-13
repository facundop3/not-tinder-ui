import React from 'react';
import { shallow } from 'enzyme';
import { View } from 'react-native';
import CurrentIndexIndicator from '../CurrentIndexIndicator';

describe('CurrentIndexIndicator component:', () => {
  test('Should render with no issues:', () => {
    const component = shallow(<CurrentIndexIndicator listOfIds={[]} />);
    expect(component.length).toBe(1);
  });
  test('Should match child elements', () => {
    const listOfIds = [{ id: 'sample-1' }, { id: 'sample-2' }];
    const component = shallow(<CurrentIndexIndicator listOfIds={listOfIds} activeIndex={0} />);
    // two View components in the component itself,
    // and the two we aare generating based on the listOfIds
    expect(component.find(View).length).toBe(4);
  });
});
