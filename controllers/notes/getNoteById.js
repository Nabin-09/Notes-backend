import Note from "../../models/noteModel";


const getNoteById = async (req , res)=>{
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            res.status(404).json({message : 'Note not found'});
        }
        res.status(200).json(note);
    }catch(error)   {
        res.status(500).json({message : error.message})
    }
}