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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var core_1 = require("@web3-react/core");
var react_1 = require("react");
var connectors_1 = require("../utils/connectors");
var hooks_1 = require("../utils/hooks");
var injected_connector_1 = require("@web3-react/injected-connector");
require("./Layout/layout.css");
// Wallet Connect Button -> if wallet connected, it will be disable to click and change its color. 
var Activate = function () {
    var context = core_1.useWeb3React();
    var activate = context.activate, active = context.active;
    var _a = react_1.useState(false), activating = _a[0], setActivating = _a[1];
    var handleActivate = function (event) {
        event.preventDefault();
        function _activate() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            setActivating(true);
                            return [4 /*yield*/, activate(connectors_1.injected)];
                        case 1:
                            _a.sent();
                            setActivating(false);
                            return [2 /*return*/];
                    }
                });
            });
        }
        _activate();
    };
    var eagerConnectionSuccessful = hooks_1.useWeb3Connect();
    hooks_1.useInactiveListener(!eagerConnectionSuccessful);
    return (jsx_runtime_1.jsx("button", __assign({ className: "button", disabled: active, onClick: handleActivate }, { children: active ? 'Wallet Connected' : 'Click here to Connect Wallet' }), void 0));
};
// Wallet Disconnect Button -> if wallet disconnected, it will be disable to click and change its color.
var Deactivate = function () {
    var context = core_1.useWeb3React();
    var deactivate = context.deactivate, active = context.active;
    var handleDeactivate = function (event) {
        event.preventDefault();
        deactivate();
    };
    return (jsx_runtime_1.jsx("button", __assign({ className: "button", disabled: !active, onClick: handleDeactivate }, { children: !active ? 'Not Connected' : 'Tab to Disconnect' }), void 0));
};
// Error Message. just use from web3react injected-connector. Error message will be alert in Connect function.
function getErrorMessage(error) {
    var errorMessage;
    switch (error.constructor) {
        case injected_connector_1.NoEthereumProviderError:
            errorMessage = "No Ethereum browser extension detected. Please install MetaMask extension";
            break;
        case core_1.UnsupportedChainIdError:
            errorMessage = "You're connected to an unsupported network";
            break;
        case injected_connector_1.UserRejectedRequestError:
            errorMessage = "Please authorize this website to access your Ethereum account.";
            break;
        default:
            errorMessage = error.message;
    }
    return errorMessage;
}
// Connect function has two components which is Activate, Deactivate
function Connect() {
    var error = core_1.useWeb3React().error;
    if (error) {
        window.alert(getErrorMessage(error));
    }
    return (jsx_runtime_1.jsxs("div", __assign({ className: "nav" }, { children: [jsx_runtime_1.jsx(Activate, {}, void 0), jsx_runtime_1.jsx(Deactivate, {}, void 0)] }), void 0));
}
exports.Connect = Connect;
