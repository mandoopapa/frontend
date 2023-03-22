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
exports.WalletStatus = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var core_1 = require("@web3-react/core");
var react_1 = require("react");
var ethers_1 = require("ethers");
// Chain ID Information
function ChainId() {
    var chainId = core_1.useWeb3React().chainId;
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("span", { children: "Chain Id : " }, void 0), jsx_runtime_1.jsx("span", { children: chainId }, void 0)] }, void 0));
}
// BlockNumber Information
function BlockNumber() {
    var _a = core_1.useWeb3React(), chainId = _a.chainId, library = _a.library;
    var _b = react_1.useState(), blockNumber = _b[0], setBlockNumber = _b[1];
    react_1.useEffect(function () {
        if (!library)
            return;
        var stale = false;
        function getBlockNumber() {
            return __awaiter(this, void 0, void 0, function () {
                var blockNumber_1, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, library.getBlockNumber()];
                        case 1:
                            blockNumber_1 = _a.sent();
                            if (!stale) {
                                setBlockNumber(blockNumber_1);
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error(error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        getBlockNumber();
        library.on('block', setBlockNumber);
        return function () {
            stale = true;
            library.removeListener('block', setBlockNumber);
            setBlockNumber(undefined);
        };
    }, [library, chainId]);
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("span", { children: "Block Number : " }, void 0), jsx_runtime_1.jsx("span", { children: blockNumber }, void 0)] }, void 0));
}
// account Information. wallet account is too big number, so that omitted except for the last 4 digits.  
function Account() {
    var account = core_1.useWeb3React().account;
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("span", { children: "Account : " }, void 0), jsx_runtime_1.jsx("span", { children: account ? account.substring(0, 6) + "..." + account.substring(account.length - 4) : '' }, void 0)] }, void 0));
}
// Balance Information
function Balance() {
    var _a = core_1.useWeb3React(), account = _a.account, library = _a.library, chainId = _a.chainId;
    var _b = react_1.useState(), balance = _b[0], setBalance = _b[1];
    react_1.useEffect(function () {
        if (typeof account === 'undefined' || account === null || library) {
            return;
        }
        var stale = false;
        function getBalance() {
            return __awaiter(this, void 0, void 0, function () {
                var balance_1, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, library.getBalance(account)];
                        case 1:
                            balance_1 = _a.sent();
                            if (!stale) {
                                setBalance(balance_1);
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error(error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        getBalance();
        library.on('block', getBalance);
        return function () {
            stale = true;
            library.removeListener('block', getBalance);
            setBalance(undefined);
        };
    }, [account, library, chainId]);
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("span", { children: "Balance : " }, void 0), jsx_runtime_1.jsx("span", { children: balance ? ethers_1.ethers.utils.formatEther(balance) + " ETH" : '0' }, void 0)] }, void 0));
}
function WalletStatus() {
    return (jsx_runtime_1.jsxs("div", __assign({ className: "status-body" }, { children: [jsx_runtime_1.jsx(ChainId, {}, void 0), jsx_runtime_1.jsx(BlockNumber, {}, void 0), jsx_runtime_1.jsx(Account, {}, void 0), jsx_runtime_1.jsx(Balance, {}, void 0)] }), void 0));
}
exports.WalletStatus = WalletStatus;
