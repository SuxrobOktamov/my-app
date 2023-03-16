import React from "react";

function Menu() {
    return(
        <div className="menu">
          <h2>Nutrition</h2>
          <p ><span id="span" ></span> selected</p>
          <div className="menu_list ">
            <span  id="menu1" className="material-symbols-outlined">delete</span>
            <span id="menu" className="material-symbols-outlined" >filter_list</span>
          </div>
        </div>
    )
}

export default Menu;