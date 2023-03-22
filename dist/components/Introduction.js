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
exports.Introduction = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Layout/layout.css");
var banner_jpg_1 = require("./banner.jpg");
function Introduction() {
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: jsx_runtime_1.jsxs("div", __assign({ className: 'intro' }, { children: [jsx_runtime_1.jsx("h1", { children: "Support Reporter with Cryptocurrency" }, void 0), jsx_runtime_1.jsx("p", {}, void 0), jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx("img", { src: banner_jpg_1.default, height: "250px", alt: 'KU' }, void 0) }, void 0), jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsxs("div", __assign({ className: 'intro_sub' }, { children: [jsx_runtime_1.jsx("h3", { children: "Meet BonMedia Directly with Web3!" }, void 0), "Donate crypto to journalists at Bonmedia, a media organization specializing in blockchain. It will help us write more quality articles.", jsx_runtime_1.jsx("br", {}, void 0), "You can donate in a variety of cryptocurrencies, such as Ethereum. Press the Donate ETH button below.", jsx_runtime_1.jsx("br", {}, void 0), "We are graduate students majoring in blockchain at the Korea University School of Information Security."] }), void 0) }, void 0)] }), void 0) }, void 0));
}
exports.Introduction = Introduction;
