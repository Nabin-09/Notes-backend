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
        description : 'Creates a new Note'
    }
)