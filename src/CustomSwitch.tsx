import React, { useState, FC } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Animated,
} from "react-native";

interface Props {
  handleChange: (isToggledRight: boolean) => any;
  isToggledRight: boolean;
  leftIcon: any;
  rightIcon: any;
}

const CustomSwitch: FC<Props> = ({
  handleChange,
  isToggledRight,
  leftIcon,
  rightIcon,
}) => {
  const [toggleToleft] = useState(new Animated.Value(0));
  const toggleRight = () => {
    Animated.timing(toggleToleft, {
      toValue: 50,
      duration: 400,
    }).start();
  };
  const toggleLeft = () => {
    Animated.timing(toggleToleft, {
      toValue: 0,
      duration: 400,
    }).start();
  };
  const handlePress = () => {
    handleChange(!isToggledRight);
    if (isToggledRight) {
      toggleLeft();
    } else {
      toggleRight();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>{leftIcon}</View>
        <Animated.View
          style={{ ...styles.toggleBall, left: toggleToleft }}
        ></Animated.View>
        <View style={{ ...styles.iconContainer, left: undefined, right: 10 }}>
          {rightIcon}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 100,
    backgroundColor: "#edba59",
    padding: 5,
    borderRadius: 30,
    position: "relative",
  },
  toggleBall: {
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.2)",
    width: 60,
    height: 50,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "white",
    position: "absolute",
  },
  iconContainer: {
    zIndex: 2,
    position: "absolute",
    left: 10,
  },
});

export default CustomSwitch;
