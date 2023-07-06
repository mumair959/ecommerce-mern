import mongoose from "mongoose";
const { Schema } = mongoose;

const emailSubscribeSchema = new Schema({
    email: {
        type : String,
        trim : true,
        required : true,
        unique : true
    }
},{
    timestamps : true
});

export default mongoose.model('EmailSubscribe', emailSubscribeSchema);