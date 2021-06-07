const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: [String],
        required: true
    },
    color: {
        type: String
    },
    size: {
        type: String,
        required: true
    },
    addedBy: { type: Schema.Types.ObjectId, ref: 'User'},
}, { timestamps: true })

module.exports = mongoose.model('Sneaker', sneakerSchema);