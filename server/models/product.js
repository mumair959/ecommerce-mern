const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type : String,
        trim : true,
        required : true
    },
    description: {
        type : String,
        trim : true,
        required : true
    },
    price: {
        type : Number,
        required : true
    },
    discount: {
        type : Number,
        required : true
    },
    netPrice: {
        type : Number,
        required : true
    },
    productImage: String,
    productType: {
        type : String,
        required : true,
        enum: ['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Groceries']
    },
    status: {
        type : String,
        required : true,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    }
},{
    timestamps : true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;