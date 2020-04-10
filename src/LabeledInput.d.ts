import { FC } from "react";
interface Props {
    label: string;
    onTextChange: (text: string) => void;
    value: string;
    multiline?: boolean;
    lines?: number;
    max?: number;
}
declare const LabeledInput: FC<Props>;
export default LabeledInput;
