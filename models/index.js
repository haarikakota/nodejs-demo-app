const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testd', {useNewUrlParser: true});



module.exports.User = require('./users')

