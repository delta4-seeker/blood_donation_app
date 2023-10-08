
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
            // host: "HTTP://192.168.75.120",

      port: 7545,
      network_id: 5777, // Match any network id
      gas: 500000000
    }
  },
  
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',

  compilers: {
    solc: {
      version: "^0.8.17"
    }
  }
};
