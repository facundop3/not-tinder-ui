import React, { FC, ReactElement } from 'react';
import { Animated, PanResponder, Dimensions } from 'react-native';

interface Props {
  verticalSwipe: () => void;
  horizontalSwipe: (isSwipedRight: boolean) => void;
  resetPosition: (isCompleted: boolean) => void;
  children: ReactElement<any, any> | null;
  animatedDefaultPosition?: Animated.ValueXY;

}
const SwipeableWrapper: FC<Props> = ({
  verticalSwipe,
  horizontalSwipe,
  resetPosition,
  children,
  animatedDefaultPosition
}) => {
  const { width, height } = Dimensions.get('window');
  const horizontalSwipeBreakpoint = 0.25 * width;
  const verticalSwipeBreakPoint = 0.25 * height;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (event, gesture) => {
      // This one makes panresponder avoid being triggered on press events
      const { dx, dy } = gesture;
      return Boolean(dx && dy);
    },
    onPanResponderMove: (event, gesture) => (
      animatedDefaultPosition?.setValue({ x: gesture.dx, y: gesture.dy })
    ),
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > horizontalSwipeBreakpoint) {
        horizontalSwipe(true);
      } else if (gesture.dx < -horizontalSwipeBreakpoint) {
        horizontalSwipe(false);
      } else if (gesture.dy < -verticalSwipeBreakPoint) {
        verticalSwipe();
      } else {
        resetPosition(false);
      }
    }
  });
  const getCardStyle = () => {
    const rotate = animatedDefaultPosition?.x.interpolate({
      // We increase the range to make the rotation increase slowlier
      inputRange: [-width * 1.5, 0, width * 1.5],
      outputRange: ['120deg', '0deg', '-120deg']
    });

    return {
      ...animatedDefaultPosition?.getLayout(),
      transform: [{ rotate }],
      justifyContent: 'center',
      alignItems: 'center'
    };
  };

  return animatedDefaultPosition
    ? (
      <Animated.View style={getCardStyle()} {...panResponder.panHandlers}>
        {children}
      </Animated.View>
    )
    : children;
};

export default SwipeableWrapper;
