import { FC, ReactNode } from "react";
interface Props {
    onPress?: () => any;
    children?: string | ReactNode;
    bg?: string;
    color?: string;
    isCircle?: boolean;
}
declare const Chip: FC<Props>;
export default Chip;
