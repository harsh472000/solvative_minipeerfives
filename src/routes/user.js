const express = require('express');

const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  // res.send('this is user page');
  try {
    const user = await User.find().populate('P5.history');
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    // console.log(req.params.id);
    const getUser = await User.findById({ _id: req.params.id }).populate('P5.history');
    // console.log(getUser);
    res.json(getUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const createUser = new User(req.body);
  // console.log(createUser);
  // console.log(req.body);
  createUser.save().then(() => {
    res.send(createUser);
  }).catch((err) => {
    // console.log(err);
    res.send(err);
  });
});

router.patch('/:id', async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      {
        _id: req.params.id,
      },
      {
        $set: { name: req.body.name },
      },
    );
    res.json(updateUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
