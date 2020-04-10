import React, { FC } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import colors from "./colors";

interface Props {
  label: string;
  onTextChange: (text: string) => void;
  value: string;
  multiline?: boolean;
  lines?: number;
  max?: number;
}
const LabeledInput: FC<Props> = props => {
  const {
    label,
    onTextChange,
    value,
    multiline = false,
    lines = 1,
    max = 500
  } = props;

  const styles = StyleSheet.create({
    container: {
      position: "relative"
    },
    input: {
      backgroundColor: "#FFF",
      height: multiline ? 150 : 40,
      paddingHorizontal: 15,
      fontSize: 18
    },
    label: {
      paddingHorizontal: 15,
      paddingVertical: 5,
      fontSize: 20,
      fontWeight: "bold"
    },
    charCounter: {
      position: "absolute",
      bottom: 15,
      right: 15,
      color: colors.darkGrey
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onTextChange}
        value={value}
        multiline={multiline}
        numberOfLines={lines}
        maxLength={max}
      />
      {multiline && (
        <Text style={styles.charCounter}>{max - value.length}</Text>
      )}
    </View>
  );
};

export default LabeledInput;
