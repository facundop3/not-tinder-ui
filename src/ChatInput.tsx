import React, { FC, ReactElement } from 'react';
import {
  View, StyleSheet, TextInput, TouchableWithoutFeedback, GestureResponderEvent
} from 'react-native';
import colors from './colors';

interface Props {
  value: string;
  handleChangeText: (text: string) => void;
  handleSend?: (e: GestureResponderEvent) => void;
  icon?: ReactElement;
}
const ChatInput: FC<Props> = ({
  value, handleChangeText, handleSend = () => { }, icon
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      autoFocus
      onChangeText={handleChangeText}
      value={value}
      placeholder="Say something"
    />
    {
        icon
        && (
        <View style={styles.sendIcon}>
          <TouchableWithoutFeedback onPress={handleSend}>
            {icon}
          </TouchableWithoutFeedback>
        </View>
        )
      }
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%'
  },
  input: {
    borderWidth: 1,
    borderColor: colors.darkGrey,
    borderRadius: 50,
    overflow: 'hidden',
    height: '60%',
    paddingHorizontal: '10%',
    width: '100%',
    position: 'relative'
  },
  sendIcon: {
    position: 'absolute',
    right: 25,
  }
});

export default ChatInput;
