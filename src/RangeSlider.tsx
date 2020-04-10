import React, { useState, useEffect } from "react";
import { View, StyleSheet, Slider } from "react-native";
import colors from "./colors";

const RangeSlider = () => {
  const [minValue, setMinValue] = useState<number>(18);
  const [maxValue, setMaxValue] = useState<number>(55);
  const handleMinChange = (value) => {
    const nextMin = value < maxValue ? value : minValue;
    console.log("nextMin:", nextMin);
    setMinValue(nextMin);
  };
  const handleMaxChange = (value) => {
    const nextMax = value > minValue ? value : maxValue;
    console.log("NextMax:", nextMax);
    setMaxValue(nextMax);
  };
  useEffect(() => {}, [minValue, maxValue]);
  return (
    <View>
      <Slider
        style={styles.slider}
        minimumValue={18}
        maximumValue={55}
        minimumTrackTintColor={colors.darkGrey}
        thumbTintColor={colors.red}
        maximumTrackTintColor={colors.darkGrey}
        value={minValue}
        onValueChange={handleMinChange}
        step={1}
      />
      <Slider
        style={styles.slider}
        minimumValue={18}
        maximumValue={55}
        minimumTrackTintColor={colors.red}
        thumbTintColor={colors.red}
        maximumTrackTintColor={colors.darkGrey}
        value={maxValue}
        onValueChange={handleMaxChange}
        step={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 15,
  },
  redLabel: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: colors.red,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  distanceLabel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  sliderContainer: {
    paddingHorizontal: 25,
  },
});

export default RangeSlider;
