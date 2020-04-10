import React from "react";
import { Image, StyleSheet } from "react-native";

interface Props {
  size?: number;
  source: { uri: string };
  style?: any;
}
const Avatar: React.FC<Props> = ({ source, size = 60, style = {} }) => {
  const styles = StyleSheet.create({
    avatar: {
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.2)",
      width: size,
      height: size,
      borderRadius: size / 2,
      marginRight: 10,
      ...style,
    },
  });
  return <Image style={styles.avatar} source={source} />;
};

export default Avatar;
