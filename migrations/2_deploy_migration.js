const Erc20token = artifacts.require("./Erc20token");

module.exports = function(deployer) {
    deployer.deploy(Erc20token, 'Kuldeep', 'SIM')
};



































































