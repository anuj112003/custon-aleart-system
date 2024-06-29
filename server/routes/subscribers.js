const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');


router.post('/', async (req, res) => {
    const { email } = req.body;
    try {
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();
        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error subscribing' });
        console.error(`error ${error}`);
    }
});

module.exports = router;
