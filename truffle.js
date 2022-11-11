const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "******************";
const mnemonic = "xxxxxxx metamask mnemonic xxxxxxxxxxxxx";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraKey}`),
      network_id: "*",
      gas: 4500000,
      gasPrice: 10000000000
    },
  }
};