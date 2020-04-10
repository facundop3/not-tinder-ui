"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = __importDefault(require("./colors"));
var CustomSlider = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    return (<react_native_1.View style={styles.container}>
      <react_native_1.View style={styles.distanceLabel}>
        <react_native_1.Text style={styles.redLabel}>Maximun Distance:</react_native_1.Text>
        <react_native_1.Text style={styles.label}>{value}Km.</react_native_1.Text>
      </react_native_1.View>
      <react_native_1.View style={styles.sliderContainer}>
        <react_native_1.Slider style={styles.slider} minimumValue={1} maximumValue={100} minimumTrackTintColor={colors_1.default.red} thumbTintColor={colors_1.default.red} maximumTrackTintColor={colors_1.default.darkGrey} value={value} onValueChange={function (value) { return onChange(value); }} step={1}/>
      </react_native_1.View>
    </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    },
    redLabel: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        color: colors_1.default.red
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10
    },
    distanceLabel: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    slider: {
        width: "100%",
        height: 40
    },
    sliderContainer: {
        paddingHorizontal: 25
    }
});
exports.default = CustomSlider;
