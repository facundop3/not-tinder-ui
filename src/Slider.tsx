import React, { FC } from "react";
import { View, Text, StyleSheet, Slider } from "react-native";
import colors from "./colors";

interface Props {
  value: number;
  onChange: (n: number) => void;
}
const CustomSlider: FC<Props> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.distanceLabel}>
        <Text style={styles.redLabel}>Maximun Distance:</Text>
        <Text style={styles.label}>{value}Km.</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={100}
          minimumTrackTintColor={colors.red}
          thumbTintColor={colors.red}
          maximumTrackTintColor={colors.darkGrey}
          value={value}
          onValueChange={value => onChange(value)}
          step={1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  redLabel: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: colors.red
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10
  },
  distanceLabel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  slider: {
    width: "100%",
    height: 40
  },
  sliderContainer: {
    paddingHorizontal: 25
  }
});

export default CustomSlider;
