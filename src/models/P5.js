const mongoose = require('mongoose');
// const timestamps = require('mongoose-timestamp');

const P5Schema = new mongoose.Schema({
  amount: {
    type: Number,
  },
  givento: {
    type: String,
  },
}, {
  timestamps: true,
});

const P5 = new mongoose.model('P5', P5Schema);
module.exports = P5;
