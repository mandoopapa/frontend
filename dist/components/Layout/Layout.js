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
var Footer_1 = require("./Footer");
var Header_1 = require("./Header");
var WalletStatus_1 = require("../WalletStatus");
var News_1 = require("../News");
require("./layout.css");
var Introduction_1 = require("../Introduction");
// Delete Bootstrap. Create a CSS on my own
var Layout = function () {
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(Header_1.default, {}, void 0), jsx_runtime_1.jsxs("div", __assign({ className: 'body' }, { children: [jsx_runtime_1.jsx(Introduction_1.Introduction, {}, void 0), jsx_runtime_1.jsx(News_1.default, {}, void 0), jsx_runtime_1.jsxs("div", __assign({ className: 'status' }, { children: [jsx_runtime_1.jsx("span", __assign({ className: 'status-title' }, { children: "Connected Wallet Status" }), void 0), jsx_runtime_1.jsx(WalletStatus_1.WalletStatus, {}, void 0)] }), void 0)] }), void 0), jsx_runtime_1.jsx(Footer_1.default, {}, void 0)] }, void 0));
};
exports.default = Layout;
