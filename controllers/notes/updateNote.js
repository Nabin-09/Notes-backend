import Note from "../../models/noteModel";

export const updateNote = async(req , res)=>{
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            res.send(404).json({message: 'Note not found'})
        }
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        )
        res.status(200).json(updatedNote)
    }catch(error){
        res.status(500).json({message : error.message})
    }
}