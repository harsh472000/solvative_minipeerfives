const { application } = require('express');
const express = require('express');
const User = require('./models/User');
const P5 = require('./models/P5');
const RewardHistory = require('./models/RewardHistory');
const { Db } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const user = require('./routes/user');
const p5 = require('./routes/p5');
const rewards = require('./routes/rewards');
const somethingnew = require('./routes/somethignew')

const port = process.env.PORT || 3001;

const app = express();
app.use(cors())
require('./db/conn');

app.use(express.json());
app.use('/user',user);
app.use('/p5',p5);
app.use('/RewardHistory',rewards);
app.use('/somethingnew',somethingnew)

app.get('/',(req,res)=>{
    res.send('mini peerfives is here');
})

// app.get('/user',async (req,res)=>{
//     // res.send('this is user page');
//     try{
//         const user = await User.find();
//         res.json(user);
//     }catch(err){
//         res.json({message:err})
//     }
// })

// app.get('/user/:id',async (req,res)=>{
//     try{
//         console.log(req.params.id);
//         const getUser = await User.findById({_id:req.params.id});
//         console.log(getUser);
//         res.json(getUser);
//     }catch(err){
//         res.json({message:err})
//     }
// })

// app.post('/user',async (req,res)=>{
//     const createUser = new User(req.body);
//     console.log(createUser);
//     console.log(req.body);
//     createUser.save().then(()=>{
//         res.send(createUser);
//     }).catch((err)=>{
//         console.log(err);
//         res.send(err);
//     })
// })

//edit user
// app.patch('/uuser/:id',async (req,res)=>{
//     try{
//         const updateUser = await User.updateOne({
//             _id:req.params.id
//         },
//         {
//             $set:{name:req.body.name}
//         })
//         res.json(updateUser);
//     }catch(err){
//         res.json({message:err})
//     }
// })

// app.get('/P5',async (req,res)=>{
//     try{
//         const p5 = await P5.find();
//         res.json(p5);
//     }catch(err){
//         res.json({message:err})
//     }
// })

// app.delete('/P5/:id',async (req,res)=>{
//     try{
//         const deleteP5 = await P5.remove({_id:req.params.id});
//         res.json(deleteP5);
//     }catch(err){
//         res.json({message:err})
//     }
// })

// app.post('/P5',async (req,res)=>{
//     const createP5 = new P5(req.body);
//     createP5.save().then(()=>{
//         res.send(createP5);
//     }).catch((e)=>{
//         res.send(e);
//     })
// })

// app.post('/RewardHistory', async (req,res)=>{
//     const createReward = new RewardHistory(req.body);
//     createReward.save().then(()=>{
//         res.send(createReward);
//     }).catch((e)=>{
//         res.send(e);
//     })
// })
 

// app.post('/somethingnew/:name',async (req,res)=>{
//     const somethingnew = new P5(req.body);
//     const plus = req.body.amount;
//     const givento = req.body.givento;
//     //const today = new Date(time);
//     //console.log(somethingnew);
//     //console.log(plus+'---'+givento);
//     console.log(req.params.name);
//     somethingnew.save().then(async ()=>{
//         res.send(somethingnew);
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

app.listen(port,()=>{
    console.log('you are connected with port number '+port);
})