const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(usr => {
            done(null, usr);
        })
        .catch((err) => {
            next(err);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },

        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id })
                .then(usr => {
                    if (usr) {
                        done(null, usr);
                    }
                    else {
                        new User({ googleId: profile.id }).save()
                            .then(user => {
                                done(null, user);
                            });
                    }
                })
                .catch((err) => {
                    next(err);
                });
        }
    )
);

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },

        (req, username, password, done) => {
            User.findOne({ email: username })
                .then((user) => {
                    if (!user) {
                        return done(null, false, { message: 'error' });
                    } else {
                        bcrypt.compare(password, user.password, (err, result) => {
                            if (err || !result) {
                                return done(null, false, { message: 'error' });
                            } else {
                                return done(null, user);
                            }
                        });
                    }
                })
                .catch((err) => {
                    done(err);
                });
        }
    )
);
