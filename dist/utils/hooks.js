"use strict";
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
exports.useInactiveListener = exports.useWeb3Connect = void 0;
var core_1 = require("@web3-react/core");
var react_1 = require("react");
var connectors_1 = require("./connectors");
function useWeb3Connect() {
    var _a = core_1.useWeb3React(), activate = _a.activate, active = _a.active;
    var _b = react_1.useState(false), tried = _b[0], setTried = _b[1];
    var tryActivate = react_1.useCallback(function () {
        function _tryActivatie() {
            return __awaiter(this, void 0, void 0, function () {
                var isAuthorized, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, connectors_1.injected.isAuthorized()];
                        case 1:
                            isAuthorized = _a.sent();
                            if (!isAuthorized) return [3 /*break*/, 5];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, activate(connectors_1.injected, undefined, true)];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _a.sent();
                            window.alert('Error: ' + (error_1 && error_1.message));
                            return [3 /*break*/, 5];
                        case 5:
                            setTried(true);
                            return [2 /*return*/];
                    }
                });
            });
        }
        _tryActivatie();
    }, [activate]);
    // useEffect를 이용해 tryActviate가 실행되게 하기 위해서 작성
    react_1.useEffect(function () {
        tryActivate();
    }, [tryActivate]);
    react_1.useEffect(function () {
        if (!tried && active) {
            setTried(true);
        }
    }, [tried, active]);
    return tried;
}
exports.useWeb3Connect = useWeb3Connect;
function useInactiveListener(suppress) {
    if (suppress === void 0) { suppress = false; }
    var _a = core_1.useWeb3React(), active = _a.active, error = _a.error, activate = _a.activate;
    react_1.useEffect(function () {
        var ethereum = window.ethereum;
        if (ethereum && ethereum.on && !active && !error && !suppress) {
            var handleConnect_1 = function () {
                console.log('handle connect');
                activate(connectors_1.injected);
            };
            var handleChainChanged_1 = function (chainId) {
                console.log('handleChainChanged', chainId);
                activate(connectors_1.injected);
            };
            var handleAccountsChanged_1 = function (accounts) {
                console.log('handleAccountsChanged', accounts);
                if (accounts.length > 0) {
                    activate(connectors_1.injected);
                }
            };
            ethereum.on('connect', handleConnect_1);
            ethereum.on('chainChanged', handleChainChanged_1);
            ethereum.on('accountsChanged', handleAccountsChanged_1);
            return function () {
                if (ethereum.removeListener) {
                    ethereum.removeListener('connect', handleConnect_1);
                    ethereum.removeListener('ChainChanged', handleChainChanged_1);
                    ethereum.removeListener('accountsChanged', handleAccountsChanged_1);
                }
            };
        }
    }, [active, error, suppress, activate]);
}
exports.useInactiveListener = useInactiveListener;
