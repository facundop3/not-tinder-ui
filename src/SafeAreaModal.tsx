import React, { FC } from 'react';
import { Modal, SafeAreaView } from 'react-native';

interface Props {
  visible: boolean;
  children: React.ReactNode;
  animationType?: "slide" | "none" | "fade";
}
const SafeAreaModal: FC<Props> = (props) => {
  const { visible, children, animationType = 'slide' } = props;
  return (
    <Modal
      animationType={animationType}
      transparent={false}
      visible={visible}
    >
      <SafeAreaView>{children}</SafeAreaView>
    </Modal>
  );
};

export default SafeAreaModal;
