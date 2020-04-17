import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from './colors';

interface Props {
  text: string;
  isInbound?: boolean;
  id: string;
}
const ChatBubble: FC<Props> = ({ text, isInbound }) => {
  const styles = StyleSheet.create({
    container: {
      alignSelf: isInbound ? 'flex-start' : 'flex-end'
    },
    message: {
      backgroundColor: isInbound ? colors.grey : colors.blue,
      padding: 12,
      borderRadius: 20,
      fontSize: 16,
      overflow: 'hidden',
      color: isInbound ? 'black' : 'white',
    }
  });
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.message}>{text}</Text>
      </View>
    </View>
  );
};

export default ChatBubble;
