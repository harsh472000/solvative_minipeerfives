const mongoose = require('mongoose');
// const P5 = require('./P5');
// const RewardHistory = require('./RewardHistory');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  P5: {
    balance: {
      type: Number,
      default: 100,
    },
    history: [{ type: 'ObjectId', ref: 'P5' }],
  },
  Reward: {
    balance: {
      type: Number,
      default: 0,
    },
    history: [],
  },
});

const User = new mongoose.model('User', userSchema);

module.exports = User;
