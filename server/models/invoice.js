import mongoose from "mongoose";
const { Schema } = mongoose;

const invoiceSchema = new Schema({
    number: {
        type : String,
        trim : true,
        required : true
    },
    amount: {
        type : Number,
        required : true
    },
    paidAt: {
        type : Date
    },
    status: {
        type : String,
        required : true,
        enum: ['Paid', 'Unpaid'],
        default: 'Unpaid'
    }
},{
    timestamps : true
});

export default mongoose.model('Invoice', invoiceSchema);