require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url:"https://eth-sepolia.g.alchemy.com/v2/21BgXrRl3xPYBUdad-u4TEwSk740dQ19",
      accounts:[ "0xafe9014748c882aab66e2647c6290cade3d0d54ec60cf861e05dd82b4f59fa6f" ],
    }
  }
};