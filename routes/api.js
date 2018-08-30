const express = require('express');
const router = express.Router();
const _ = require('lodash');

const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

const Connection = require('../models/connections');
const User = require('../models/users');

router.get('/current_user', (req, res) => {
    res.send(req.user);
});

router.post('/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '',
        source: req.body.id
    });

    res.send('');
});

router.post('/connections/setRequest', async (req, res) => {
    const requestUser = await User.findOne({ email: req.body.request });

    if (!requestUser) {
        res.status(406).json({ error: 'Пользователь не найден' });
    }

    else {
        const connection = await Connection.findOne({ $or: [{user: req.user._id, request: requestUser._id}, {user: requestUser._id, request: req.user._id}] });

        if (connection) {
            res.status(409).json({ error: 'Запрос уже существует' });
        }
    }

    await new Connection({ user: req.user._id, request: requestUser._id }).save();

    res.end();
});

router.post('/connections/removeConnection', async (req, res) => {
    await Connection.remove({ $or: [{user: req.user._id, request: req.body.userId}, {user: req.body.userId, request: req.user._id}] });

    res.end();
});

router.get('/connections/getConnections', async (req, res) => {
    const connectionList = await Connection.find({ connect: true, $or: [{user: req.user._id}, {request: req.user._id}] });

    const userIdList = _.map(connectionList, (val) => {
         return val.user.toString() === req.user._id.toString() ? val.request : val.user;
    });

    const result = await User.find({ _id: {$in: userIdList} });

    res.send(result);
});

router.get('/connections/getIncomingRequests', async (req, res) => {
    const requestList = await Connection.find({ connect: false, request: req.user._id });

    const userIdList = _.map(requestList, (val) => val.user);

    const result = await User.find({ _id: {$in: userIdList} });

    res.send(result);
});

router.get('/connections/getOutgoingRequests', async (req, res) => {
    const requestList = await Connection.find({ connect: false, user: req.user._id });

    const userIdList = _.map(requestList, (val) => val.request);

    const result = await User.find({ _id: {$in: userIdList} });

    res.send(result);
});

module.exports = router;
