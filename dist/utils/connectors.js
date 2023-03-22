"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injected = void 0;
var injected_connector_1 = require("@web3-react/injected-connector");
exports.injected = new injected_connector_1.InjectedConnector({
    supportedChainIds: [1, 31337]
});
// 31337 = Hardhat
