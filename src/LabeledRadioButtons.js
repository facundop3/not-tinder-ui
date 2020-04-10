"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var RadioButton_1 = __importDefault(require("./RadioButton"));
var LabeledRadioButtons = function (props) {
    var label = props.label, options = props.options;
    var _a = react_1.useState({
        value: "",
        label: ""
    }), selectedOption = _a[0], setSelectedOption = _a[1];
    var handlePress = function (label) {
        setSelectedOption(label);
    };
    return (<react_native_1.View>
      <react_native_1.Text style={styles.label}> {label}</react_native_1.Text>
      <react_native_1.View style={styles.container}>
        {options.map(function (option) {
        return (<react_native_1.View style={styles.radioContainer} key={option.value}>
              <RadioButton_1.default selected={selectedOption.value === option.value} handlePress={function () { return handlePress(option); }}/>
              <react_native_1.Text style={styles.radioLabel}>{option.label}</react_native_1.Text>
            </react_native_1.View>);
    })}
      </react_native_1.View>
    </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        padding: 15
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    },
    radioContainer: {
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 5,
        alignItems: "center"
    },
    radioLabel: {
        marginLeft: 5,
        fontSize: 18
    }
});
exports.default = LabeledRadioButtons;
