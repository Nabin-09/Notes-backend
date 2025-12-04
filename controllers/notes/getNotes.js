import Note from "../../models/noteModel";

export const getNotes = async (req , res)=>{
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }catch(error){
        res.status(500).json({message : error.message});
    }
};