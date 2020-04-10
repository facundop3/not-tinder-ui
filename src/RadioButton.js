"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = __importDefault(require("./colors"));
var RadioButton = function (props) {
    var _a = props.selected, selected = _a === void 0 ? false : _a, _b = props.style, style = _b === void 0 ? {} : _b, _c = props.handlePress, handlePress = _c === void 0 ? function () { } : _c;
    return (<react_native_1.TouchableWithoutFeedback onPress={handlePress}>
      <react_native_1.View style={[
        {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: selected ? colors_1.default.red : colors_1.default.darkGrey,
            alignItems: "center",
            justifyContent: "center"
        },
        style
    ]}>
        {selected ? (<react_native_1.View style={{
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: colors_1.default.red
    }}/>) : null}
      </react_native_1.View>
    </react_native_1.TouchableWithoutFeedback>);
};
exports.default = RadioButton;
