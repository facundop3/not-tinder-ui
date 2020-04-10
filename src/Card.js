"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = __importDefault(require("./colors"));
var Card = function (_a) {
    var children = _a.children;
    return <react_native_1.View style={styles.container}>{children}</react_native_1.View>;
};
var styles = react_native_1.StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors_1.default.darkGrey,
        borderRadius: 5,
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "white"
    }
});
exports.default = Card;
