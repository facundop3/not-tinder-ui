import React, { FC, ReactNode } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import colors from './colors';
import CurrentIndexIndicator from './CurrentIndexIndicator';

interface Opacities {
  left: number | Animated.AnimatedInterpolation;
  right: number | Animated.AnimatedInterpolation;
  down: number | Animated.AnimatedInterpolation;

}

interface Props {
  opacities: Opacities;
  leftLabel: string;
  rightLabel: string;
  downLabel: string;
  images: any[];
  currentImageIndex?: number;
  handleCurrentImageChange: (n: number, length: number) => void;
  onBottomPress: () => void;
  bottomData: ReactNode;
}
const MediaCard: FC<Props> = (props) => {
  const {
    opacities,
    leftLabel,
    rightLabel,
    downLabel,
    onBottomPress,
    bottomData,
    images,
    currentImageIndex = 0,
    handleCurrentImageChange
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={images[currentImageIndex]}
        />
        <Animated.View
          style={[styles.leftLabelContainer, { opacity: opacities.left }]}
        >
          <Text style={styles.leftLabelText}>{leftLabel}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.rightLabelContainer, { opacity: opacities.right }]}
        >
          <Text style={styles.rightLabelText}>{rightLabel}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.bottomLabelContainer, { opacity: opacities.down }]}
        >
          <Text style={styles.bottomLabelText}>{downLabel}</Text>
        </Animated.View>
        <View style={styles.candidateDataContainer}>
          {bottomData}
        </View>
      </View>
      <CurrentIndexIndicator
        listOfIds={images.map((e, i) => ({ id: String(i) }))}
        activeIndex={currentImageIndex}
      />
      <TouchableWithoutFeedback
        onPress={() => handleCurrentImageChange(1, images.length)}
      >
        <View style={styles.nextPic} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => handleCurrentImageChange(-1, images.length)}
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
    width: '95%',
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
  candidateDataContainer: {
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
