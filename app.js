var mongoose = require('mongoose');
var User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/ecommerce');

var user = new User({
    name: 'Kaustubh',
    email: 'kaustubh87@gmail.com'
});

user.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }

    User.findOne({ email : 'kaustubh87@gmail.com'}, function(error, docs){
        if(error){
           console.log(error);
            process.exit(1);
        }

        console.log(docs);
    });
});