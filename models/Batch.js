// models/Batch.js
const mongoose = require('mongoose');

const BatchSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    origin: { type: String, required: true },
    quality: { type: String, required: true },
    timestamp: { type: Date, required: true },
    motionData: { type: String, required: true }
});

module.exports = mongoose.model('Batch', BatchSchema);
