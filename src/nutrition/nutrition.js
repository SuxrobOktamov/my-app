import React from "react";
import Menu from "./menu";
import Table from "./table";
import Page from "./page";

import './nutrition.css';

function Nutrition() {
    return(
       <div>
            <div class="nutrition">
                <Menu/>
                <Table/>
                <Page/>
             </div>
            <h3>Dense padding</h3>
       </div> 
    )
}

export default Nutrition;