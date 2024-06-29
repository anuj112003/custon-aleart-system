const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');
require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host:process.env.HOST,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});


// POST /api/alerts
router.post('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find({});
        
        const mailOptions = {
            from: 'Anuj Sharma', 
            subject: 'Alert Notification',
            text: 'This is an alert notification from orderG.',
        };

        // Send email to each subscriber
        for (const subscriber of subscribers) {
            mailOptions.to = subscriber.email; // Assuming 'email' field in Subscriber model
            await transporter.sendMail(mailOptions);
        }
        console.log('Alert sent to:', subscribers);
        res.status(200).json({ message: 'Alert sent' });
    } catch (error) {
        res.status(500).json({ error: 'Error sending alert' });
        console.error('Error sending alert:', error);

    }
});

module.exports = router;
