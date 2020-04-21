import React, { FC, ReactElement } from 'react';
import {
  View, StyleSheet, TextInput, TouchableWithoutFeedback, GestureResponderEvent, Text
} from 'react-native';
import colors from './colors';

interface Props {
  value: string;
  handleChangeText: (text: string) => void;
  handleSend?: (e: GestureResponderEvent) => void;
  sendIcon?: ReactElement;
}
const ChatInput: FC<Props> = ({
  value, handleChangeText, handleSend = () => { }, sendIcon
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      autoFocus
      onChangeText={handleChangeText}
      value={value}
      placeholder="Say something"
    />
    <View style={styles.sendIcon}>
      <TouchableWithoutFeedback onPress={handleSend}>
        {
            sendIcon || <Text style={styles.sendLabel}>Send</Text>
          }
      </TouchableWithoutFeedback>
    </View>
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
  },
  sendLabel: {
    fontWeight: 'bold'
  }
});

export default ChatInput;
