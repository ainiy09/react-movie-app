import React from "react";
import '../Search/search.css'

export function Search (){
    return(
        <div className="search">
            <input type="text" placeholder="Search movie..." />
            <button type="submit"></button>
        </div>
    )
}

export default Search;