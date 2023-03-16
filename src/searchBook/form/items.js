import React from "react";

function items(item){
    return(
        <li className="list-group-item">{item.name}<button className="btn btn-danger btn-sm float-end delete">X</button></li>
    )
};

export default items;