import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "./colors";
const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.darkGrey,
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "white"
  }
});

export default Card;
