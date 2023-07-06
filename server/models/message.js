import mongoose from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema({
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
    email: {
        type : String,
        trim : true,
        required : true
    },
    phone: {
        type : String,
        trim : true,
        required : true
    },
    content: {
        type : String,
        trim : true,
        required : true
    },
    status: {
        type : String,
        required : true,
        enum: ['Sent', 'Viewed', 'Processing', 'Resolved'],
        default: 'Sent'
    }
},{
    timestamps : true
});

export default mongoose.model('Message', messageSchema);