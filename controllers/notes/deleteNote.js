import Note from "../../models/noteModel.js";

export const deleteNote = async(req , res)=>{
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({message : 'Note not found'})
        }
        await note.deleteOne();
        res.status(200).json({id: req.params.id , message : 'Note Deleted'});
    }catch(error){
        res.status(500).json({message : error.message})
    }
}