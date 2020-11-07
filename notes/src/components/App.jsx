import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import NotesData from "../notesData";



function App(){

    const [searchTerm, getSearchTerm] = useState("");
    
function filterResult(event){
    getSearchTerm(event.target.value);
}


    return (
        <div>
            <Header />

            <div className="search">
                <input type = "text" name = "searchTerm" placeholder = "Search..." onChange={filterResult}/>
            </div>


            {NotesData.filter(noteData => noteData.title.toLowerCase().includes(searchTerm.toLowerCase())).map(note => 
                <Note 
                        key={note.id} 
                        title={note.title} 
                        content={note.content} />
            )}


            <Footer />
        </div>
        )
}

export default App;