const express = require('express');

const router = express.Router();
const RewardHistory = require('../models/RewardHistory');

router.post('/', async (req, res) => {
  const createReward = new RewardHistory(req.body);
  createReward.save().then(() => {
    res.send(createReward);
  }).catch((e) => {
    res.send(e);
  });
});

module.exports = router;
