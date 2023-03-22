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
// Component of BonMendia's News Crawling. Not yet decided.
require("./Layout/layout.css");
var Transfer_1 = require("./Transfer");
function News() {
    return (jsx_runtime_1.jsxs("div", __assign({ className: 'news' }, { children: [jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("span", __assign({ className: 'report_title' }, { children: "Max Lee" }), void 0), jsx_runtime_1.jsx("p", { children: "Latest News" }, void 0), jsx_runtime_1.jsx("a", __assign({ href: 'https://www.bonmedia.kr/news/articleView.html?idxno=456', target: '_blank', rel: 'noreferrer' }, { children: "\uCE60\uB9AC\uC988, 14\uC77C \uCE60\uB9AC\uC988 \uD1A0\uD070 \uD640\uB354 \uB300\uC0C1 \uBC0B\uC5C5 \uAC1C\uCD5C" }), void 0), jsx_runtime_1.jsx("p", {}, void 0), jsx_runtime_1.jsx("a", __assign({ href: 'https://www.bonmedia.kr/news/articleView.html?idxno=430', target: '_blank', rel: 'noreferrer' }, { children: "\uC720\uAC00\uB7A9\uC2A4, \uBE44\uD2B8\uCF54\uC778 NFT \uD2B8\uC6F0\uBE0C\uD3F4\uB4DC \uC2DC\uB9AC\uC988 \uC644\uD310" }), void 0), jsx_runtime_1.jsx("p", {}, void 0), jsx_runtime_1.jsx("a", __assign({ href: "https://www.bonmedia.kr/news/articleList.html?sc_area=A&view_type=sm&sc_word=%EC%9D%B4%EC%9E%AC%EC%84%B1", target: '_blank', rel: 'noreferrer' }, { children: "See the latest News on BonMedia" }), void 0), jsx_runtime_1.jsx("p", {}, void 0), jsx_runtime_1.jsx(Transfer_1.Transfer, {}, void 0)] }, void 0), jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("h2", { children: "Vincent Hong" }, void 0), jsx_runtime_1.jsx("p", { children: "Latest News 1" }, void 0), jsx_runtime_1.jsx("p", { children: "Latest News 2" }, void 0), jsx_runtime_1.jsx("a", __assign({ href: "/#" }, { children: "See the latest News on BonMedia" }), void 0)] }, void 0), jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("h2", { children: "..." }, void 0), jsx_runtime_1.jsx("p", { children: "Latest News 1" }, void 0), jsx_runtime_1.jsx("p", { children: "Latest News 2" }, void 0), jsx_runtime_1.jsx("a", __assign({ href: "/#" }, { children: "See the latest News on BonMedia" }), void 0)] }, void 0)] }), void 0));
}
exports.default = News;
