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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Chip = function (_a) {
    var onPress = _a.onPress, children = _a.children, _b = _a.bg, bg = _b === void 0 ? "rgba(0,0,0, .5)" : _b, _c = _a.color, color = _c === void 0 ? "white" : _c, isCircle = _a.isCircle;
    var styles = react_native_1.StyleSheet.create({
        chipContainer: __assign({ backgroundColor: bg, padding: 5, borderRadius: 50, alignItems: "center", margin: 5, height: 30, justifyContent: "center" }, (isCircle ? { width: 30 } : {})),
        chip: {
            color: color
        }
    });
    return (<react_native_1.TouchableHighlight style={styles.chipContainer} onPress={onPress}>
      <react_native_1.Text style={styles.chip}>{children}</react_native_1.Text>
    </react_native_1.TouchableHighlight>);
};
exports.default = Chip;
