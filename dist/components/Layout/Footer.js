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
require("./layout.css");
var Footer = function () {
    return (jsx_runtime_1.jsxs("div", __assign({ className: 'footer' }, { children: [jsx_runtime_1.jsx("h2", { children: "BonMedia" }, void 0), jsx_runtime_1.jsx("div", __assign({ className: 'github' }, { children: jsx_runtime_1.jsx("a", __assign({ href: 'https://github.com/mandoopapa/frontend', target: '_blank', rel: 'noreferrer' }, { children: "Github" }), void 0) }), void 0)] }), void 0));
};
exports.default = Footer;
