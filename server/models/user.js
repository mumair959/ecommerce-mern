const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type : String,
        trim : true,
        required : true
    },
    lastname: {
        type : String,
        trim : true,
        required : true
    },
    username: {
        type : String,
        trim : true,
        required : false
    },
    email: {
        type : String,
        trim : true,
        required : true,
        unique : true
    },
    phone: {
        type : String,
        trim : true,
        required : false,
        unique : true
    },
    password: {
        type : String,
        required : true,
        min : 6,
        max : 20
    },
    profileImage: String,
    userType: {
        type : String,
        required : true,
        enum: ['SuperAdmin', 'Admin', 'Customer', 'Vendor'],
        default: 'Customer'
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

const User =  mongoose.model('User', userSchema);

module.exports = User;