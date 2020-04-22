import React, { FC, ReactNode } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import RoundButton from './RoundButton';
import colors from './colors';

interface Props {
  id: string;
  addIcon: ReactNode;
  removeIcon: ReactNode;
  height?: number;
  width?: number;
  addCallback: (id?: string) => any;
  removeCallback: (id?: string) => any;
  imageSource?: { uri: string };
}

const AddRemoveImage: FC<Props> = ({
  id,
  addIcon,
  removeIcon,
  addCallback,
  imageSource,
  removeCallback,
  width = 100,
  height = 150
}) => {
  const styles = StyleSheet.create({
    AddRemoveImage: {
      height,
      width
    },
    dashedContainer: {
      backgroundColor: colors.grey,
      borderColor: colors.darkGrey,
      borderWidth: 2,
      borderRadius: 10,
      borderStyle: 'dashed',
      position: 'absolute',
      height: '100%',
      width: '100%',
    },
    image: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
    },
  });

  return (
    <TouchableWithoutFeedback onPress={() => !imageSource && addCallback(id)}>
      <View style={styles.AddRemoveImage}>
        {imageSource ? (
          <>
            <Image source={imageSource} style={styles.image} />
            <View style={{ position: 'absolute', right: -10, bottom: -10 }}>
              <RoundButton
                size={30}
                border
                onPress={() => removeCallback(id)}
                color={colors.red}
              >
                {removeIcon}
              </RoundButton>
            </View>
          </>
        )
          : (
            <>
              <View style={styles.dashedContainer} />
              <View style={{ position: 'absolute', right: -10, bottom: -10 }}>
                <RoundButton
                  size={30}
                  border
                  onPress={() => addCallback(id)}
                  color={colors.red}
                >
                  {addIcon}
                </RoundButton>
              </View>
            </>
          )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddRemoveImage;
