const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    picture: String,
    wallet: {type:Number, default: 0},
    credits: {type: Number, default: 0}
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };