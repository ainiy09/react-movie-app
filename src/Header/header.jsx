import React from "react";
import '../Header/header.css'
import { Search } from "../Search/search";

export function Header (){
    return(
        <div className="header">
            <Search/>
        </div>
    )
}

export default Header;