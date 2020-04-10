import React, { FC, ReactNode } from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

interface Props {
  onPress?: () => any;
  children?: string | ReactNode;
  bg?: string;
  color?: string;
  isCircle?: boolean;
}
const Chip: FC<Props> = ({
  onPress,
  children,
  bg = "rgba(0,0,0, .5)",
  color = "white",
  isCircle
}) => {
  const styles = StyleSheet.create({
    chipContainer: {
      backgroundColor: bg,
      padding: 5,
      borderRadius: 50,
      alignItems: "center",
      margin: 5,
      height: 30,
      justifyContent: "center",
      ...(isCircle ? { width: 30 } : {})
    },
    chip: {
      color
    }
  });

  return (
    <TouchableHighlight style={styles.chipContainer} onPress={onPress}>
      <Text style={styles.chip}>{children}</Text>
    </TouchableHighlight>
  );
};

export default Chip;
