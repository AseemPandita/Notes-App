import React from "react";

let title = "Title";
let content = "Content of the note goes here."

function Note(){
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Note;