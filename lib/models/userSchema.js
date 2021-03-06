const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  handle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

const UserSchema = mongoose.model('User', userSchema);

module.exports = UserSchema;
