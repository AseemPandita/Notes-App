import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import NotesData from "../notesData";


function App(){
    return (
        <div>
            <Header />
            {NotesData.map(noteData => (
                <Note 
                    key={noteData.id} 
                    title={noteData.title} 
                    content={noteData.content} />
                )
            )}
            <Footer />
        </div>
        )
}

export default App;