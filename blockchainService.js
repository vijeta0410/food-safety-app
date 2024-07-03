// blockchainService.js
const Web3 = require('web3');
const contract = require('@truffle/contract');
const fs = require('fs');
const path = require('path');
const tf = require('@tensorflow/tfjs-node');
const joblib = require('joblib');

const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);

const contractJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../food-safety-blockchain/build/contracts/FoodSafety.json')));
const FoodSafety = contract(contractJson);
FoodSafety.setProvider(provider);

const cnnModel = tf.loadLayersModel('file://models/meat_quality_cnn.h5');
const eNoseModel = joblib.load('models/e_nose_model.pkl');
// Motion detection model can be similarly loaded

module.exports = {
    addBatch: async (origin, quality, motionData) => {
        const accounts = await web3.eth.getAccounts();
        const instance = await FoodSafety.deployed();
        await instance.addBatch(origin, quality, motionData, { from: accounts[0] });
    },
    getBatches: async () => {
        const instance = await FoodSafety.deployed();
        return await instance.getBatches();
    },
    predictFreshnessFromImage: async (image) => {
        const prediction = await cnnModel.predict(image).data();
        return prediction;
    },
    predictFreshnessFromE_Nose: async (data) => {
        const prediction = eNoseModel.predict(data);
        return prediction;
    },
    // Similarly, you can add motion detection model prediction methods
};
