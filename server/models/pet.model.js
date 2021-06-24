const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [ true, 'Pet name is required' ],
        minLength: [ 3, "Must be at least 3 characters." ],
        },
    petType: {
        type: String,
        required: [ true, 'Pet type is required' ],
        minLength: [ 3, 'Must be at least 3 characters'],
    },
    description: {
        type: String,
        required: [ true, 'Pet description is required' ],
        minLength: [ 3, 'Must be at least 3 characters' ],
     },
     like: {
        type: Number,
        default: 0,
    },
    skill1: { type: String },
    skill2: { type: String },
    skill3: { type: String },
 }, { timestamps: true});

 module.exports = mongoose.model("Pet", PetSchema);
