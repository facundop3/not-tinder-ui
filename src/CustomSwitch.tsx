import React, { useState, FC, ReactNode } from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Animated,
} from 'react-native';

interface Props {
  handleChange: (isToggledRight: boolean) => void;
  isToggledRight: boolean;
  leftIcon: ReactNode;
  rightIcon: ReactNode;
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
      useNativeDriver: false,
    }).start();
  };
  const toggleLeft = () => {
    Animated.timing(toggleToleft, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
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
        />
        <View style={{ ...styles.iconContainer, left: undefined, right: 10 }}>
          {rightIcon}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 100,
    backgroundColor: '#edba59',
    padding: 5,
    borderRadius: 30,
    position: 'relative',
  },
  toggleBall: {
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 60,
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: 'white',
    position: 'absolute',
  },
  iconContainer: {
    zIndex: 2,
    position: 'absolute',
    left: 10,
  },
});

export default CustomSwitch;
