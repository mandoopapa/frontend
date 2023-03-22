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
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
var core_1 = require("@web3-react/core");
var provider_1 = require("./utils/provider");
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(jsx_runtime_1.jsx(core_1.Web3ReactProvider, __assign({ getLibrary: provider_1.getProvider }, { children: jsx_runtime_1.jsx(App_1.default, {}, void 0) }), void 0));
