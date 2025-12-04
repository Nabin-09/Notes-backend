import mongoose from "mongoose";

const noteSchema  = mongoose.Schema(
    {
        content  : {
            type : String,
            required : [true , 'Please add a text value'],
        },
        important: {
            type : Boolean,
            default : false,
        },
    },
    {
        timestamps : true,
    }
);

const Note = mongoose.model('Note' , noteSchema)

export default Note;