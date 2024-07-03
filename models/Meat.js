// backend/models/Meat.js
const mongoose = require('mongoose');

const MeatSchema = new mongoose.Schema({
    origin: { type: String, required: true },
    quality: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Meat', MeatSchema);
