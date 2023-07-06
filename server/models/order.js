import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema({
    orderBy: {
        type : mongoose.Types.ObjectId,
        ref: "User"
    },
    number: {
        type : String,
        trim : true,
        required : true
    },
    amount: {
        type : Number,
        required : true
    },
    discount: {
        type : Number,
        required : true
    },
    netAmount: {
        type : Number,
        required : true
    },
    status: {
        type : String,
        required : true,
        enum: ['Pending', 'Received', 'Processing', 'Dispatched', 'Delivered'],
        default: 'Pending'
    }
},{
    timestamps : true
});

export default mongoose.model('Order', orderSchema);