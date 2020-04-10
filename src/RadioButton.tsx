import React, { FC } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import colors from "./colors";

interface Props {
  selected?: boolean;
  style?: any;
  handlePress?: (ev: any) => void;
}
const RadioButton: FC<Props> = props => {
  const { selected = false, style = {}, handlePress = () => {} } = props;

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: selected ? colors.red : colors.darkGrey,
            alignItems: "center",
            justifyContent: "center"
          },
          style
        ]}
      >
        {selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: colors.red
            }}
          />
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RadioButton;
