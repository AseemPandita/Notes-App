import React from "react";
import Note from "./Note";
import NotesData from "../notesData";

function Results(props){
    return (

        NotesData
            .filter(noteData => ( 
                noteData.title.toLowerCase().includes(props.searchTerm.toLowerCase()) || 
                noteData.content.toLowerCase().includes(props.searchTerm.toLowerCase())
                ))
            .map(note => 
                <Note 
                        key={note.id} 
                        title={note.title} 
                        content={note.content} />
            )


    )
}

export default Results;