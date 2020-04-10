"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var CustomSwitch = function (_a) {
    var handleChange = _a.handleChange, isToggledRight = _a.isToggledRight, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon;
    var toggleToleft = react_1.useState(new react_native_1.Animated.Value(0))[0];
    var toggleRight = function () {
        react_native_1.Animated.timing(toggleToleft, {
            toValue: 50,
            duration: 400,
        }).start();
    };
    var toggleLeft = function () {
        react_native_1.Animated.timing(toggleToleft, {
            toValue: 0,
            duration: 400,
        }).start();
    };
    var handlePress = function () {
        handleChange(!isToggledRight);
        if (isToggledRight) {
            toggleLeft();
        }
        else {
            toggleRight();
        }
    };
    return (<react_native_1.TouchableWithoutFeedback onPress={handlePress}>
      <react_native_1.View style={styles.container}>
        <react_native_1.View style={styles.iconContainer}>{leftIcon}</react_native_1.View>
        <react_native_1.Animated.View style={__assign(__assign({}, styles.toggleBall), { left: toggleToleft })}></react_native_1.Animated.View>
        <react_native_1.View style={__assign(__assign({}, styles.iconContainer), { left: undefined, right: 10 })}>
          {rightIcon}
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.TouchableWithoutFeedback>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        width: 100,
        backgroundColor: "#edba59",
        padding: 5,
        borderRadius: 30,
        position: "relative",
    },
    toggleBall: {
        borderWidth: 0.5,
        borderColor: "rgba(0,0,0,0.2)",
        width: 60,
        height: 50,
        borderRadius: 30,
        overflow: "hidden",
        backgroundColor: "white",
        position: "absolute",
    },
    iconContainer: {
        zIndex: 2,
        position: "absolute",
        left: 10,
    },
});
exports.default = CustomSwitch;
