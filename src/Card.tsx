import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from './colors';

const Card: FC = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.darkGrey,
    borderRadius: 5,
    padding: 20,
    backgroundColor: 'white',
  },
});

export default Card;
