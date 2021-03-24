import React, { useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
    const [notesState, dispatch] = useReducer(notesReducer, []);

    useEffect(() => {
        const notesState = JSON.parse(localStorage.getItem('notesState'));

        if (notesState) {
            dispatch({ type: 'POPULATE_NOTES', notesState })
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notesState', JSON.stringify(notesState));
    }, [notesState]);

    return (
        <NotesContext.Provider value={{ notesState, dispatch }}>
            <h1>Notes</h1>
            <NoteList />
            <AddNoteForm />
        </NotesContext.Provider>
    )
}

export { NoteApp as default }