import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from './colors';

interface Props {
  listOfIds: { id: string }[];
  activeIndex: number;
  activeColor?: string;
  inactiveColor?: string;
}
const CurrentIndexIndicator: FC<Props> = (props) => {
  const {
    listOfIds, activeIndex, activeColor = 'white', inactiveColor = colors.darkGrey
  } = props;

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      width: '100%',
      top: 5,
      alignItems: 'center'
    },
    progressContainer: {
      flexDirection: 'row',
      width: '95%',

    },
    current: {
      height: 1,
      borderWidth: 2,
      borderRadius: 10,
      margin: 1,
      flex: 1
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        {
          listOfIds.map(({ id }, i) => {
            const borderColor = i === activeIndex ? activeColor : inactiveColor;
            return <View style={{ ...styles.current, borderColor }} key={id} />;
          })
        }
      </View>
    </View>
  );
};

export default CurrentIndexIndicator;
