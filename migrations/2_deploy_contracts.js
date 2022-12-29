// migrating the appropriate contracts
var FarmerRole = artifacts.require("./FarmerRole.sol");
var DistributorRole = artifacts.require("./DistributorRole.sol");
var RetailerRole = artifacts.require("./RetailerRole.sol");
var ConsumerRole = artifacts.require("./ConsumerRole.sol");
var SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
  deployer.deploy(FarmerRole, { gas: 5000000 });
  deployer.deploy(DistributorRole, { gas: 5000000 });
  deployer.deploy(RetailerRole, { gas: 5000000 });
  deployer.deploy(ConsumerRole, { gas: 5000000 });
  deployer.deploy(SupplyChain, { gas: 5000000 });
};