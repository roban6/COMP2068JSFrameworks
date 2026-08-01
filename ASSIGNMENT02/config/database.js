const mongoose = require('mongoose');


function connectDB() {

    mongoose.connect(process.env.MONGODB_URI, {

        useNewUrlParser: true,

        useUnifiedTopology: true

    })
    .then(() => {

        console.log('MongoDB Connected Successfully');

    })
    .catch((error) => {

        console.log('MongoDB Connection Error');

        console.log(error);

    });

}


module.exports = connectDB;