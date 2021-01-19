import React, { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () => {

    // If LS is empty, default to empty array using logical or operator
    // const [notes, setNotes] = useState([]);

    // useReducer returns an array with 2 things on it - state and dispatch function
    const [notes, dispatch] = useReducer(notesReducer, []);

    useEffect(() => {
        // Reads notes data from LS
        const notes = JSON.parse(localStorage.getItem('notes'));

        if (notes) {
            dispatch({ type: 'POPULATE_NOTES', notes })

            console.log('useEffect runs once when reading localStorage');
            // once the data exists, run setNotes once
            // setNotes(notesdata);
        }
    }, []);

    // Update LS with notes array when it changes 
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
        console.log('This runs when notes changes');
    }, [notes]);

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>
            <NoteList />
            <AddNoteForm />
        </NotesContext.Provider>
    )
}

export { NoteApp as default }