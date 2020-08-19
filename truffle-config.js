const HDWalletProvider = require("@truffle/hdwallet-provider")
const {privateKey, publicKey} = require("./privatekey")

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
    },
    live: {
      provider: function() {
        return new HDWalletProvider(privateKey, "https://mainnet.infura.io/v3/fec429161b004239a49fafd18a277382")
      },
      network_id: 1,
      gasPrice: 105e9,
      from: publicKey,
      gas: 8e6
    }
  },

  compilers: {
    solc: {
      version: "0.5.16",
      docker: false,
      settings: {
       optimizer: {
         enabled: true,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    }
  }
}