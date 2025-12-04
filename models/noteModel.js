import mongoose from "mongoose";

const noteSchema  = mongoose.Schema(
    {
        content  : {
            type : String,
            required : [true , 'Please add a text value'],
        },
        
    }
)