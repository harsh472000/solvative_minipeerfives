const express = require('express');

const router = express.Router();
const User = require('../models/User');
const P5 = require('../models/P5');

// router.post('/:name',async (req,res)=>{
//     const somethingnew = new P5(req.body);
//     const plus = req.body.amount;
//     const givento = req.body.givento;
//     //const today = new Date(time);
//     //console.log(somethingnew);
//     //console.log(plus+'---'+givento);
//     console.log(req.params.name);
//     somethingnew.save().then(async ()=>{
//         res.send(somethingnew);
//         //console.log("id is ------"+somethingnew._id);
//         // const result = await User.findOne({name:'geet'});
//         // console.log(result);
//         const updateUsers = await User.updateOne({
//             name:req.params.name
//         },
//         {
//             $inc:{
//                 "P5.balance": -plus
//             },
//             $push:{
//                 "P5.history":[somethingnew]
//             }
//         })
//         //res.json(updateUsers);
//         console.log(updateUsers);
//         // console.log(req.body);
//         // User.findOneAndUpdate({name:'geet'},{P5:req.body});
//         const anotherUserUpdate = await User.updateOne({
//             name:givento
//         },
//         {
//             $inc:{
//                 "Reward.balance": plus
//             },
//             $push:{
//                 "Reward.history":[{
//                     amount:plus,
//                     givenby:req.params.name,
//                     date:new Date
//                 }]
//             }
//         })
//     })
// })

router.post('/:name', async (req, res) => {
  const somethingnew = new P5(req.body);
  const plus = req.body.amount;
  const { givento } = req.body;
  // const today = new Date(time);
  // console.log(somethingnew);
  // console.log(plus+'---'+givento);
  // console.log(req.params.name);
  somethingnew.save().then(async () => {
    res.send(somethingnew);
    // console.log("id is ------"+somethingnew._id);
    // const result = await User.findOne({name:'geet'});
    // console.log(result);
    const updateUsers = await User.updateOne(
      {
        name: req.params.name,
      },
      {
        $inc: {
          'P5.balance': -plus,
        },
        $push: {
          // eslint-disable-next-line no-underscore-dangle
          'P5.history': somethingnew._id,
        },
      },
    );
    // res.json(updateUsers);
    // console.log(updateUsers);
    // console.log(req.body);
    // User.findOneAndUpdate({name:'geet'},{P5:req.body});
    const anotherUserUpdate = await User.updateOne(
      {
        name: givento,
      },
      {
        $inc: {
          'Reward.balance': plus,
        },
        $push: {
          'Reward.history': [{
            amount: plus,
            givenby: req.params.name,
            date: new Date(),
          }],
        },
      },
    );
  });
});

module.exports = router;
