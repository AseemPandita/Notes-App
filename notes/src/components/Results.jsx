import React, { useState } from "react";
import Note from "./Note";
import NotesData from "../notesData";

function Results(props){

    const [notes_, setNotesData] = useState(NotesData);

    

    function deleteNote(id){
        let response = window.confirm("Are you sure you want to delete this note? (id: " + id + ")");
        console.log("Note #" + id + " delete request is: " + response);
        setNotesData(notes_.filter(noteData => (
            noteData.id !== id
        )));
        console.log(notes_);
    }

    return (

        NotesData
            .filter(noteData => ( 
                noteData.title.toLowerCase().includes(props.searchTerm.toLowerCase()) || 
                noteData.content.toLowerCase().includes(props.searchTerm.toLowerCase())
                ))
            .map(note => 
                <Note 
                        key={note.id} 
                        id={note.id}
                        title={note.title} 
                        content={note.content}
                        deleteNote={deleteNote} />
            )


    )
}

export default Results;