

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// MongoDB connection
mongoose.connect('mongodb://localhost/custom_alert_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define routes
const subscriberRoutes = require('./routes/subscribers');
const alertRoutes = require('./routes/alerts');

app.use('/api/subscribers', subscriberRoutes);
app.use('/api/alerts', alertRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
