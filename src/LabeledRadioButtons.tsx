import React, { FC, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RadioButton from "./RadioButton";

interface option {
  value: string;
  label: string;
}
interface Props {
  label: string;
  options: option[];
}
const LabeledRadioButtons: FC<Props> = props => {
  const { label, options } = props;
  const [selectedOption, setSelectedOption] = useState<option>({
    value: "",
    label: ""
  });
  const handlePress = label => {
    setSelectedOption(label);
  };
  return (
    <View>
      <Text style={styles.label}> {label}</Text>
      <View style={styles.container}>
        {options.map(option => {
          return (
            <View style={styles.radioContainer} key={option.value}>
              <RadioButton
                selected={selectedOption.value === option.value}
                handlePress={() => handlePress(option)}
              />
              <Text style={styles.radioLabel}>{option.label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 15
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10
  },
  radioContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center"
  },
  radioLabel: {
    marginLeft: 5,
    fontSize: 18
  }
});

export default LabeledRadioButtons;
