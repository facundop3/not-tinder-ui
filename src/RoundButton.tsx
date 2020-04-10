import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  Animated
} from "react-native";

interface Props {
  onPress: () => void;
  children?: string | React.ReactNode;
  size?: number;
  color?: string;
  shadow?: boolean;
  border?: boolean;
  height?: number;
  width?: number;
}

const RoundButton: React.FC<Props> = props => {
  const {
    onPress,
    children = "Like",
    size = 60,
    color = "white",
    shadow,
    border,
    height,
    width
  } = props;
  const [scale] = useState<any>(new Animated.Value(1));
  const animateIn = () => {
    Animated.timing(scale, {
      toValue: 0.9,
      duration: 100
    }).start();
  };
  const animateOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 80
    }).start();
  };
  const styles = StyleSheet.create({
    button: {
      height: height ? height : size,
      width: width ? width : size,
      borderRadius: size / 2,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: border ? 0.5 : 0,
      borderColor: "rgba(0,0,0,0.2)",
      backgroundColor: color
    },
    shadows: {
      ...(shadow && {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        borderRadius: size / 2,
        height: height ? height : size,
        width: width ? width : size
      })
    },
    animatedStyle: {
      transform: [{ scale }]
    }
  });

  return (
    <TouchableWithoutFeedback
      onPressIn={animateIn}
      onPressOut={animateOut}
      onPress={onPress}
    >
      <Animated.View style={[styles.shadows, styles.animatedStyle]}>
        <View style={styles.button}>
          <Text>{children}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default RoundButton;
