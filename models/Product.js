var mongoose = require('mongoose');

var Category = require('./Category');

var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pictures: [{
        type: String,
        match: /^http:\/\//i
    }],
    price: {
        amount: {
            type: Number,
            required: true
        },

         currency : {
                type: String,
                enum: ['USD', 'EUR', 'INR'],
                required: true
            }
        },
        category : Category.categorySchema
    });

    module.exports = mongoose.model("Product", productSchema);

