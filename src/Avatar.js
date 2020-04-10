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
var Avatar = function (_a) {
    var source = _a.source, _b = _a.size, size = _b === void 0 ? 60 : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
    var styles = react_native_1.StyleSheet.create({
        avatar: __assign({ overflow: "hidden", borderWidth: 1, borderColor: "rgba(0,0,0,0.2)", width: size, height: size, borderRadius: size / 2, marginRight: 10 }, style),
    });
    return <react_native_1.Image style={styles.avatar} source={source}/>;
};
exports.default = Avatar;
