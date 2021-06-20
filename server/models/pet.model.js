const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [ true, 'Pet name is required' ],
        minLength: [ 3, "Pet name must be at least 3 characters." ],
        },
    petType: {
        type: String,
        required: [ true, 'Pet type is requrired' ],
        minLength: [ 3, 'Minimum length must be at least 3 characters'],
    },
    petSex: {
        type: String,
        required: [ true, 'Pet sex is required'],
        enum: [
            'Male',
            'Female',
        ],
     },
    description: {
        type: String,
        required: [ true, 'Pet description is required' ],
        minLength: [ 3, 'Minimum length must be at least 3 characters' ],
     },
 }, { timestamps: true});

 module.exports = mongoose.model("Pet", PetSchema);
