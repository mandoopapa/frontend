"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvider = void 0;
var providers_1 = require("@ethersproject/providers");
function getProvider(provider) {
    var web3Provider = new providers_1.Web3Provider(provider);
    web3Provider.pollingInterval = 1000;
    return web3Provider;
}
exports.getProvider = getProvider;
