// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const meatRoutes = require('./routes/meat');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://vijetavaisnavit:Shyam%401509@cluster0.cr2yydl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api/meat', meatRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// backend/server.js (additional code)
const { exec } = require('child_process');

function monitorQuality() {
    exec('python3 scripts/analyze_quality.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stdout.includes('spoiled')) {
            // send alert
            console.log('Spoilage detected! Sending alert...');
            // Add code for sending email or SMS alerts
        }
    });
}

setInterval(monitorQuality, 3600000); // run every hour

// backend/server.js (additional code)
const cron = require('node-cron');

cron.schedule('0 0 * * SUN', () => {
    console.log('Running weekly retraining job...');
    exec('python3 scripts/retrain_model.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log('Model retraining complete.');
    });
});

