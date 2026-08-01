const mongoose = require('mongoose');

const mongooseFuzzySearching = require('mongoose-fuzzy-searching');


const gameSchema = new mongoose.Schema({

    title: {

        type: String,

        required: true,

        trim: true

    },


    platform: {

        type: String,

        required: true,

        trim: true

    },


    genre: {

        type: String,

        required: true,

        trim: true

    },


    releaseYear: {

        type: Number,

        required: true

    },


    completionStatus: {

        type: String,

        required: true,

        enum: [
            'Not Started',
            'In Progress',
            'Completed'
        ]

    },


    personalRating: {

        type: Number,

        required: true,

        min: 1,

        max: 10

    },


    createdAt: {

        type: Date,

        default: Date.now

    }


});



// Enable fuzzy searching

gameSchema.plugin(mongooseFuzzySearching, {

    fields: [

        'title',

        'platform',

        'genre'

    ]

});



module.exports = mongoose.model('Game', gameSchema);