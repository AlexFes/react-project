const mongoose = require('mongoose');
const { Schema } = mongoose;

const connectionsSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },

    request: {
        type: Schema.Types.ObjectId,
        required: true
    },

    connect: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('connections', connectionsSchema);