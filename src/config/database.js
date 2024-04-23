const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect('mongodb://localhost/tweeter')
}

module.exports = connect