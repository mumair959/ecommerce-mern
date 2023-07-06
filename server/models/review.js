import mongoose from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema({
    reviewedBy: {
        type : ObjectId,
        ref: "User"
    },
    reviewedAt: {
        type : Date
    },
    review: {
        type : String,
        trim : true,
        required : true
    },
    rating: {
        type : String,
        required : true,
        enum: ['1', '2', '3', '4', '5'],
        default: '5'
    }
},{
    timestamps : true
});

export default mongoose.model('Message', messageSchema);