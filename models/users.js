const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String,

    email: {
        type: String,
        unique: true,
        match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    },

    password: String
});

module.exports = mongoose.model('users', userSchema);