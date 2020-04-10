"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var CandidateModal = function (props) {
    var visible = props.visible, children = props.children, _a = props.animationType, animationType = _a === void 0 ? "slide" : _a;
    return (<react_native_1.Modal animationType={animationType} transparent={false} visible={visible} {...props}>
      <react_native_1.SafeAreaView>{children}</react_native_1.SafeAreaView>
    </react_native_1.Modal>);
};
exports.default = CandidateModal;
