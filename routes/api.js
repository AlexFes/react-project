const express = require('express');
const router = express.Router();

const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

router.get('/current_user', (req, res) => {
    res.send(req.user);
});

router.get('/logout', (req, res) => {
    req.logout();

    res.redirect('/home');
});

router.post('/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '',
        source: req.body.id
    });

    // Handle charge here

    res.send('');
});

module.exports = router;
