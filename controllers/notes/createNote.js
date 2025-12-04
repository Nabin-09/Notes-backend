import Note from "../../models/noteModel";

export const createNote = async (req, res)=>{
    try{
        if(!req.body.content){
            return res.status(400).json({messgae : 'Please add a content field'})
        }
        const note = await Note.create({
            content : req.body.content,
            important : req.body.important
        });
        res.status(200).json(note);
    }catch(error){
        res.status(500).json({message : error.message})
    }
}