var Contribution = artifacts.require("./Contribution.sol")
var btcsuisse = web3.eth.accounts[0];
var multisig = web3.eth.accounts[1];
var matchpool = web3.eth.accounts[2];
var test = web3.eth.accounts[0];
var privstarttime = web3.eth.getBlock('latest').timestamp;
var pubstartTime = privstarttime + 3600;

var Migrations = artifacts.require("Migrations")

module.exports = function(deployer) {
  var guptoken, contribution, a;
  deployer.deploy(Migrations)
  deployer.deploy(Contribution,btcsuisse,multisig,matchpool,pubstartTime,privstarttime);
  
};

