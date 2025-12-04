import express from 'express'

import { 
    createNote,
    getNoteById,
    getNotes,
    updateNote,
    deleteNote
 } from '../controllers/notes/index.js'

const router = express.Router();

router.route('/')
        .get(getNotes)
        .post(createNote);

router.route('/:id')
        .put(updateNote)
        .delete(deleteNote)
        .get(getNoteById)

export default router