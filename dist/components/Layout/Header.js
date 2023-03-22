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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Connect_1 = require("../Connect");
require("./layout.css");
var bonlogo_png_1 = require("./bonlogo.png");
var Header = function () {
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: jsx_runtime_1.jsxs("div", __assign({ className: 'header' }, { children: [jsx_runtime_1.jsx("img", { src: bonlogo_png_1.default, alt: "BonLogo" }, void 0), jsx_runtime_1.jsx(Connect_1.Connect, {}, void 0)] }), void 0) }, void 0));
};
exports.default = Header;
