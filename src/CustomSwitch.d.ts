import { FC } from "react";
interface Props {
    handleChange: (isToggledRight: boolean) => any;
    isToggledRight: boolean;
    leftIcon: any;
    rightIcon: any;
}
declare const CustomSwitch: FC<Props>;
export default CustomSwitch;
