import { FC } from "react";
interface option {
    value: string;
    label: string;
}
interface Props {
    label: string;
    options: option[];
}
declare const LabeledRadioButtons: FC<Props>;
export default LabeledRadioButtons;
