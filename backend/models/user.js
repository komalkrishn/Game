const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique:true,
    },
    gender:{
        type: String
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;

