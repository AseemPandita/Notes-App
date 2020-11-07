import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App(){
    return (
        <div>
            <Header />
            <Note title = "Title" content = "Here goes some content" />
            <Note title = "Title" content = "Here goes some more content" />
            <Note title = "Title" content = "Here is yet another card" />
            <Footer />
        </div>
        )
}

export default App;