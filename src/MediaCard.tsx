import React, { FC, ReactNode } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Dimensions
} from 'react-native';
import colors from './colors';
import CurrentIndexIndicator from './CurrentIndexIndicator';

interface Props {
  leftLabel?: string;
  rightLabel?: string;
  downLabel?: string;
  images: any[];
  currentImageIndex?: number;
  handleCurrentImageChange: (n: number) => any;
  onBottomPress?: () => any;
  bottomData?: ReactNode;
  positionXY?: Animated.ValueXY;
}
const MediaCard: FC<Props> = (props) => {
  const {
    leftLabel = '',
    rightLabel = '',
    downLabel = '',
    onBottomPress = () => { },
    bottomData,
    images,
    currentImageIndex = 0,
    handleCurrentImageChange,
    positionXY
  } = props;
  const { width, height } = Dimensions.get('window');
  const leftOpacity = positionXY?.x.interpolate({
    inputRange: [0, width / 4],
    outputRange: [0, 1]
  });
  const rightOpacity = positionXY?.x.interpolate({
    inputRange: [-width / 4, 0],
    outputRange: [1, 0]
  });
  const downOpacity = positionXY?.y.interpolate({
    inputRange: [-height / 4, 0],
    outputRange: [1, 0]
  });


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={images[currentImageIndex]}
        />
        {positionXY && (
          <>
            <Animated.View
              style={[styles.leftLabelContainer, { opacity: leftOpacity }]}
            >
              <Text style={styles.leftLabelText}>{leftLabel}</Text>
            </Animated.View>
            <Animated.View
              style={[styles.rightLabelContainer, { opacity: rightOpacity }]}
            >
              <Text style={styles.rightLabelText}>{rightLabel}</Text>
            </Animated.View>
            <Animated.View
              style={[styles.bottomLabelContainer, { opacity: downOpacity }]}
            >
              <Text style={styles.bottomLabelText}>{downLabel}</Text>
            </Animated.View>
          </>
        )}
        {
          bottomData
          && (
          <View style={styles.bottomDataContainer}>
            {bottomData}
          </View>
          )
        }
      </View>
      <CurrentIndexIndicator
        listOfIds={images.map((e, i) => ({ id: String(i) }))}
        activeIndex={currentImageIndex}
      />
      <TouchableWithoutFeedback
        onPress={() => handleCurrentImageChange(1)}
      >
        <View style={styles.nextPic} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => handleCurrentImageChange(-1)}
      >
        <View style={styles.previusPic} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onBottomPress}>
        <View style={styles.openInfo} />
      </TouchableWithoutFeedback>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bottomDataContainer: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    display: 'flex',
  },
  nextPic: {
    height: '80%',
    width: '50%',
    right: 0,
    position: 'absolute',
  },
  previusPic: {
    height: '80%',
    width: '50%',
    left: 0,
    position: 'absolute',
  },
  openInfo: {
    height: '20%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
  },
  leftLabelContainer: {
    position: 'absolute',
    borderWidth: 4,
    borderColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    top: 40,
    left: 30,
    transform: [{ rotate: '-25deg' }],
  },
  rightLabelContainer: {
    position: 'absolute',
    borderWidth: 4,
    borderColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    top: 40,
    right: 30,
    transform: [{ rotate: '25deg' }],
  },
  bottomLabelContainer: {
    position: 'absolute',
    borderWidth: 4,
    borderColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    bottom: 100,
    left: 100,
    transform: [{ rotate: '-25deg' }],
  },
  leftLabelText: {
    color: colors.green,
    fontSize: 55,
    fontWeight: 'bold',
  },
  rightLabelText: {
    color: colors.red,
    fontSize: 55,
    fontWeight: 'bold',
  },
  bottomLabelText: {
    color: colors.blue,
    fontSize: 45,
    fontWeight: 'bold',
  },
});

export default MediaCard;
