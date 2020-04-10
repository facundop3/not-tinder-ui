import React, { FC } from "react";
interface Props {
    visible: boolean;
    children: React.ReactNode;
    animationType?: "slide" | "none" | "fade";
}
declare const CandidateModal: FC<Props>;
export default CandidateModal;
