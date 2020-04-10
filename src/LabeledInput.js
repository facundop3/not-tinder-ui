"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = __importDefault(require("./colors"));
var LabeledInput = function (props) {
    var label = props.label, onTextChange = props.onTextChange, value = props.value, _a = props.multiline, multiline = _a === void 0 ? false : _a, _b = props.lines, lines = _b === void 0 ? 1 : _b, _c = props.max, max = _c === void 0 ? 500 : _c;
    var styles = react_native_1.StyleSheet.create({
        container: {
            position: "relative"
        },
        input: {
            backgroundColor: "#FFF",
            height: multiline ? 150 : 40,
            paddingHorizontal: 15,
            fontSize: 18
        },
        label: {
            paddingHorizontal: 15,
            paddingVertical: 5,
            fontSize: 20,
            fontWeight: "bold"
        },
        charCounter: {
            position: "absolute",
            bottom: 15,
            right: 15,
            color: colors_1.default.darkGrey
        }
    });
    return (<react_native_1.View style={styles.container}>
      <react_native_1.Text style={styles.label}>{label}</react_native_1.Text>
      <react_native_1.TextInput style={styles.input} onChangeText={onTextChange} value={value} multiline={multiline} numberOfLines={lines} maxLength={max}/>
      {multiline && (<react_native_1.Text style={styles.charCounter}>{max - value.length}</react_native_1.Text>)}
    </react_native_1.View>);
};
exports.default = LabeledInput;
