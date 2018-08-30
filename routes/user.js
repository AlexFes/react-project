const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/users');

router.post('/signup', (req, res, next) => {
    User.findOne({email: req.body.email})
        .then((user) => {
            if (user) {
                return res.status(409).json({
                    message: 'Неверный адрес электронной почты'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            email: req.body.email,
                            password: hash
                        });

                        user.save()
                            .then((user) => {
                                req.login(user, (err) => {
                                    if (err) { return next(err); }
                                    return res.redirect('/home');
                                });
                            })
                            .catch((err) => {
                                console.log(err);

                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
        });
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/signup',
    failureFlash: false })
);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/home');
});

module.exports = router;