// migrations/2_deploy_contracts.js
const FoodSafety = artifacts.require("FoodSafety");

module.exports = function (deployer) {
    deployer.deploy(FoodSafety);
};
