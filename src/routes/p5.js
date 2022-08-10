const express = require('express');

const router = express.Router();
const P5 = require('../models/P5');

router.get('/', async (req, res) => {
  try {
    const p5 = await P5.find();
    res.json(p5);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteP5 = await P5.remove({ _id: req.params.id });
    res.json(deleteP5);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const createP5 = new P5(req.body);
  createP5.save().then(() => {
    res.send(createP5);
  }).catch((e) => {
    res.send(e);
  });
});

module.exports = router;
