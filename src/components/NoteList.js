import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/notes-context';

const NoteList = () => {
    const { notesState } = useContext(NotesContext);

    return notesState.map((note) => (
        <Note key={note.title} note={note} />
    ))
}

export { NoteList as default }