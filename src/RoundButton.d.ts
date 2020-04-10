import React from "react";
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
declare const RoundButton: React.FC<Props>;
export default RoundButton;
