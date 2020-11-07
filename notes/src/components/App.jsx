import React, { useState } from "react";
import Header from "./Header";
import Search from "./SearchBar";
import Footer from "./Footer";
import Results from "./Results";



function App(){

    const [searchTerm, setSearchTerm] = useState("");

    function filterResults(data){
        setSearchTerm(data);
    }


    return (
        <div>
            <Header />

            <Search handleChange={filterResults}/>

            <Results searchTerm = {searchTerm} />

            <Footer />
        </div>
        )
}

export default App;