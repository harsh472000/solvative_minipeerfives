const mongoose = require('mongoose');

mongoose.connect(process.env.DB_LINK,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connection is succesfull');
}).catch((e)=>{
    console.log(e);
})