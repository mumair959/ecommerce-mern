import mongoose from "mongoose";
const { Schema } = mongoose;

const orderItemSchema = new Schema({
    orderId: {
        type : ObjectId,
        ref: "Order"
    },
    productId: {
        type : ObjectId,
        ref: "Product"
    },
    unitPrice: {
        type : Number,
        required : true
    },
    quantity: {
        type : Number,
        required : true
    },
    price: {
        type : Number,
        required : true
    }
},{
    timestamps : true
});

export default mongoose.model('OrderItem', orderItemSchema);