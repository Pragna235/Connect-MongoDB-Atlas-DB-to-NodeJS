const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://PragnaPro1:dxUGuAel8Tm1QBIKa@cluster0.tyis3af.mongodb.net/?retryWrites=true&w=majority");

const User = require('./models/userModel.js');

async function insert(){
    User.create({
        name: 'Pragna',
        email:'yp23@gmail.com'
    });
}
insert();

http.listen(3000,function(){
    console.log('Server is running');
})
