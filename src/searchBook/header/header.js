import React from "react";
import Item from "./item";
import Search from "./search";


function Header() {
    return(
        <div className="container">
            <div className="row">
                <Item/>
                <Search/>
            </div>
        </div>
    )
}

export default Header;