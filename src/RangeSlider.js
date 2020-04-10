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
var colors_1 = __importDefault(require("./colors"));
var RangeSlider = function () {
    var _a = react_1.useState(18), minValue = _a[0], setMinValue = _a[1];
    var _b = react_1.useState(55), maxValue = _b[0], setMaxValue = _b[1];
    var handleMinChange = function (value) {
        var nextMin = value < maxValue ? value : minValue;
        console.log("nextMin:", nextMin);
        setMinValue(nextMin);
    };
    var handleMaxChange = function (value) {
        var nextMax = value > minValue ? value : maxValue;
        console.log("NextMax:", nextMax);
        setMaxValue(nextMax);
    };
    react_1.useEffect(function () { }, [minValue, maxValue]);
    return (<react_native_1.View>
      <react_native_1.Slider style={styles.slider} minimumValue={18} maximumValue={55} minimumTrackTintColor={colors_1.default.darkGrey} thumbTintColor={colors_1.default.red} maximumTrackTintColor={colors_1.default.darkGrey} value={minValue} onValueChange={handleMinChange} step={1}/>
      <react_native_1.Slider style={styles.slider} minimumValue={18} maximumValue={55} minimumTrackTintColor={colors_1.default.red} thumbTintColor={colors_1.default.red} maximumTrackTintColor={colors_1.default.darkGrey} value={maxValue} onValueChange={handleMaxChange} step={1}/>
    </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        padding: 15,
    },
    redLabel: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        color: colors_1.default.red,
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
    },
    distanceLabel: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    slider: {
        width: "100%",
        height: 40,
    },
    sliderContainer: {
        paddingHorizontal: 25,
    },
});
exports.default = RangeSlider;
