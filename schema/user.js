const { Schema, Types } = require("mongoose");
const mongoose = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    passwor: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = UserSchema;