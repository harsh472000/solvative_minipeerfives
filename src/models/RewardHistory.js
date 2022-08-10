const mongoose = require('mongoose');
// const timestamps = require('mongoose-timestamp');

const RewardSchema = new mongoose.Schema({
  amount: {
    type: Number,
  },
  givenby: {
    type: String,
  },
}, {
  timestamps: true,
});

const RewardHistory = new mongoose.model('RewardHistory', RewardSchema);
module.exports = RewardHistory;
