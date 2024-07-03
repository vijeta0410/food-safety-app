// routes/meat.js
const express = require('express');
const router = express.Router();
const Batch = require('../models/Batch');
const blockchainService = require('../blockchainService');

router.post('/add', async (req, res) => {
    const { origin, quality, motionData } = req.body;
    try {
        await blockchainService.addBatch(origin, quality, motionData);
        const batches = await blockchainService.getBatches();
        const newBatch = batches[batches.length - 1];
        const batch = new Batch({
            id: newBatch.id,
            origin: newBatch.origin,
            quality: newBatch.quality,
            timestamp: new Date(newBatch.timestamp * 1000),
            motionData: newBatch.motionData
        });
        await batch.save();
        res.json(batch);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const batches = await Batch.find();
        res.json(batches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
