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
var RoundButton = function (props) {
    var onPress = props.onPress, _a = props.children, children = _a === void 0 ? "Like" : _a, _b = props.size, size = _b === void 0 ? 60 : _b, _c = props.color, color = _c === void 0 ? "white" : _c, shadow = props.shadow, border = props.border, height = props.height, width = props.width;
    var scale = react_1.useState(new react_native_1.Animated.Value(1))[0];
    var animateIn = function () {
        react_native_1.Animated.timing(scale, {
            toValue: 0.9,
            duration: 100
        }).start();
    };
    var animateOut = function () {
        react_native_1.Animated.timing(scale, {
            toValue: 1,
            duration: 80
        }).start();
    };
    var styles = react_native_1.StyleSheet.create({
        button: {
            height: height ? height : size,
            width: width ? width : size,
            borderRadius: size / 2,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: border ? 0.5 : 0,
            borderColor: "rgba(0,0,0,0.2)",
            backgroundColor: color
        },
        shadows: __assign({}, (shadow && {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 4,
            borderRadius: size / 2,
            height: height ? height : size,
            width: width ? width : size
        })),
        animatedStyle: {
            transform: [{ scale: scale }]
        }
    });
    return (<react_native_1.TouchableWithoutFeedback onPressIn={animateIn} onPressOut={animateOut} onPress={onPress}>
      <react_native_1.Animated.View style={[styles.shadows, styles.animatedStyle]}>
        <react_native_1.View style={styles.button}>
          <react_native_1.Text>{children}</react_native_1.Text>
        </react_native_1.View>
      </react_native_1.Animated.View>
    </react_native_1.TouchableWithoutFeedback>);
};
exports.default = RoundButton;
