import React from "react";

function Search(props){

    function updateSearchTerm(event){
        let searchValue = event.target.value;
        props.handleChange(searchValue);
    }

    return(
        <div className="search">
                <input type = "text" name = "searchTerm" placeholder = "Search..." onChange={updateSearchTerm}/>
        </div>
    );
}

export default Search;