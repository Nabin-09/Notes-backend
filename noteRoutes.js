import express from 'express'

import { 
    createNote,
    getNoteById,
    getNotes,
    updateNote,
    deleteNote
 } from './controllers/notes'

const router = express.Router();
