import {tool} from '@langchain/core/tools'
import {z} from 'zod';
import Note from '../models/noteModel';

export const getNotesTool = tool (
    async ()=>{
        const notes = await Note.find({});
        return JSON.stringify(notes);
    },
    {
        name : 'get_notes',
        description : 'Call this function to get all the notes saved by user'
    }
)


export const createNoteTool = tool(
    async({content , important}) =>{

        const newNote = await Note.create({content , important});
        return `Note created with ID  : ${newNote.id}`
    },
    {
        name : 'create_note',
        description : 'Creates a new Note',
        schema : z.object({
            content : z.string().describe('The content of the note'),
            important : z.boolean().optional().describe('Is this note important ?')
        })
    }
)

export const updateNoteTool = tool(
    async ({id , content}) =>{
        try {
            const updated = await Note.findByIdAndUpdate(id , {content} , {new : true});
            if(!updated) return 'Note not found';
            return `Note updated to : ${updated.content}`
        }catch(err){
            return `Error updating the notes ${err}`
        }
    },
    {
        name : 'update_note',
        description : 'Update contents of a Note, requires the note ID',
        schema : z.object({
            id : z.string().describe('The database _id of the note'),
            content : z.string().describe('The new content text')
        })
    }
)


export const deleteNote = tool(
    async ({id})=>{
        try{
            await Note.findByIdAndDelete(id);
            return `Node ${id} deleted`
        }catch(e){
            return `Error deleting node , ${e}`
        }
    },
    {
        name : 'delete_node',
        description : 'Deletes a node. Requires the Note ID',
        schema : z.object({
            id : z.string().describe('The database _id of the note'),
        }),
    }
)